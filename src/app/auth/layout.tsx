export default function AutenticationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <div className="bg-white mx-2 md:w-3/4 lg:w-3/10 md:mx-auto border my-16 border-gray-200 shadow-3xl min-h-100 rounded-2xl">
          <p className="text-center text-xl font-bold mt-8 mb-4">Wekil AI</p>
          <p className="text-center text-md text-gray-400 font-semibold mb-4">
            Informal Agreement Generator
          </p>
          {children}
        </div>
      </body>
    </html>
  );
}
