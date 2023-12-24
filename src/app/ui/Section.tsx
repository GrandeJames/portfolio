export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-24">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide mb-5">
        {title}
      </h2>
      {children}
    </section>
  );
}
