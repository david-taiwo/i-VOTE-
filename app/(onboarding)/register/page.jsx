"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth";

export default function RegisterPage() {
  const router = useRouter();
  const [voterId, setVoterId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const isValid =
    voterId.trim().length >= 4 &&
    password.length >= 8 &&
    password === confirmPassword &&
    agree;

  const handleSubmit = () => {
    if (!isValid) return;

    try {
      setError(null);
      signUp({ voterId: voterId.trim(), password });
      router.push("/registration");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to register";
      setError(message);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
        Welcome!
      </h1>
      <p className="mt-1 text-slate-600">
        Welcome to iVOTE’s Online Voting System, please register as a voter to
        vote in your preferred candidate.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700">
            Voters ID No.
          </label>
          <input
            value={voterId}
            onChange={(event) => setVoterId(event.target.value)}
            placeholder="Voters ID No."
            className="text-slate-700 mt-1 w-full rounded-full border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700">
            Create password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="text-slate-700 mt-1 w-full rounded-full border border-slate-300 px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword((state) => !state)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            >
              👁
            </button>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Use letters, numbers and symbols (min 8 chars).
          </p>
        </div>

        <div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Confirm Password"
              className="text-slate-700 w-full rounded-full border border-slate-300 px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <label className="flex items-center gap-3 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={agree}
            onChange={(event) => setAgree(event.target.checked)}
          />
          I agree to iVOTE’s{" "}
          <a className="text-indigo-600 underline" href="#">
            Terms
          </a>{" "}
          and{" "}
          <a className="text-indigo-600 underline" href="#">
            Privacy Policy
          </a>
        </label>

        {error && <p className="text-sm text-rose-600">{error}</p>}

        <button
          disabled={!isValid}
          onClick={handleSubmit}
          className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-md disabled:opacity-50"
        >
          REGISTER
        </button>

        <p className="text-center text-sm text-slate-600">
          Already have an account?{" "}
          <a href="/login" className="font-semibold text-indigo-600">
            Sign in
          </a>
        </p>
      </div>
    </>
  );
}
