import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/db";
import User from "@/models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoke on successful sign in
    async signIn({ profile }) {
      // Connect to database
      await connectDB();
      // Check if user exists
      const userExists = await User.findOne({ email: profile.email });
      // If not, create user to db
      if(!userExists) {
        // Truncate user name if too long
        const username = profile.name.slice(0, 20);
        await User.create({
          username,
          email: profile.email,
          image: profile.image,
        });
      }
      // Return true to allow sign in
      return true;
    },
    // Modifies the session object
    async session({ session }) {
      // Add user from db
      const user = await User.findOne({ email: session.user.email });
      // assign user id to session
      session.user.id = user._id.toString();
      //  return session;
      return session;
    },
  },
};
