export const metadata = {
  title: "Dr. Cindy | Content Studio",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="sanity"
      style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
    >
      {children}
    </div>
  );
}
