import React from 'react'
import Image from 'next/image'

const About = () => {
  const teamMembers = [
    {
      name: "Roderick Pastor",
      title: "President",
      image: "/profImg1.jpg"
    },
    {
      name: "Pierce Norman Belloso",
      title: "Vice President",
      image: "/profImg1.jpg"
    },
    {
      name: "Sarita Cara Lagmay",
      title: "Elections Director",
      image: "/profImg2.jpg"
    },
    {
      name: "Reginald Dantes",
      title: "IT Director",
      image: "/profImg1.jpg"
    }
  ]

  const strengths = [
    {
      title: "Increased Voter Turnout",
      description: "The system can increase voter turnout by making it easier for voters to cast their ballots from any location. This can make voting more convenient and allow more people to participate in the democratic process."
    },
    {
      title: "Accurate Results",
      description: "With this system, the results are instantly tallied and can be verified more quickly and accurately than with traditional paper-based methods. This can also reduce the risk of errors that can occur with manual counting and verification."
    },
    {
      title: "Cost-Effective",
      description: "The system can be less expensive than traditional paper-based methods. This is because they require fewer resources to set up and maintain, as well as fewer personnel to oversee the process."
    },
    {
      title: "Secure",
      description: "The system is highly secure and can use encryption and other security measures to ensure that votes are counted accurately and securely."
    }
  ]

  return (
    <div>
      {/* About Us Section */}
      <section className="bg-white text-lg md:text-lg py-16 px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center text-[#483ef7]">
          {/* About Us Title */}
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
            About Us
          </h2>
          
          <p className="max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            iVOTE is an Online Voting System that is used to gather instant and trustworthy results. We aim to make voting and elections easy, seamless, and fair.
          </p>

          {/* Management Team Title */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">
            Management Team
          </h2>

          {/* Management Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-t from-blue-50 to-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Team Member Image */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden flex items-center justify-center border-2 border-blue-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {/* Team Member Name */}
                <h4 className="text-sm font-bold mb-1">
                  {member.name}
                </h4>
                
                {/* Team Member Title */}
                <p className="text-sm text-blue-600 font-medium">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Strengths Section */}
      <section className="bg-white px-6 md:px-8">
        <div className="max-w-7xl mx-auto text-[#483ef7]">
          {/* Mission Section */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Our Mission
            </h2>
            <p className="  max-w-3xl mx-auto leading-relaxed">
              To provide a secure and convenient way for citizens to cast their ballots in public elections. The system will enable citizens to cast their votes without having to leave their homes or wait in line at polling stations. It will also provide an audit trail for each vote to ensure its accuracy and integrity. The system will be designed to be secure, reliable, and user-friendly.
            </p>
          </div>

          {/* Strengths Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12">
              Our Strengths
            </h3>

            {/* Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {strengths.map((strength, index) => (
                <div 
                  key={index} 
                  className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="font-bold mb-3">
                    {strength.title}
                  </h4>
                  <p className="">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About