// Simple client-side mock auth service to support onboarding flows.
// Replace with real API calls when backend is ready.

export type SignUpPayload = {
  voterId: string;
  password: string;
};

export type SignInPayload = {
  voterId: string;
  password: string;
};

export type ProfilePayload = {
  firstName: string;
  middleName?: string;
  lastName: string;
  birthday?: string;
  phone?: string;
  email?: string;
  organization?: string;
  province?: string;
  barangay?: string;
  city?: string;
};

const KEY = "ivote_users";
const SESSION_KEY = "ivote_session";

type AuthDb = Record<
  string,
  {
    password: string;
    profile: ProfilePayload | null;
  }
>;

function loadDatabase(): AuthDb {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as AuthDb) : {};
  } catch (error) {
    console.warn("Failed to parse auth database from storage.", error);
    return {};
  }
}

function saveDatabase(database: AuthDb) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(database));
}

export function signUp({ voterId, password }: SignUpPayload) {
  const id = voterId.trim();
  if (!id) throw new Error("Voter ID is required");

  const database = loadDatabase();
  if (database[id]) throw new Error("Account already exists");

  database[id] = { password, profile: null };
  saveDatabase(database);
  if (typeof window !== "undefined") {
    window.localStorage.setItem(SESSION_KEY, id);
  }
}

export function signIn({ voterId, password }: SignInPayload) {
  const id = voterId.trim();
  const database = loadDatabase();
  const record = database[id];

  if (!record || record.password !== password) {
    throw new Error("Invalid credentials");
  }

  if (typeof window !== "undefined") {
    window.localStorage.setItem(SESSION_KEY, id);
  }
}

export function saveProfile(profile: ProfilePayload) {
  if (typeof window === "undefined") throw new Error("Not signed in");

  const voterId = window.localStorage.getItem(SESSION_KEY);
  if (!voterId) throw new Error("Not signed in");

  const database = loadDatabase();
  const record = database[voterId];
  if (!record) throw new Error("Account not found");

  record.profile = profile;
  saveDatabase(database);
}

export function signOut() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(SESSION_KEY);
}
