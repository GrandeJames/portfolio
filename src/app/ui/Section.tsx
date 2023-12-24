export default function Section({
  title,
  children,
  reference,
}: {
  title: string;
  children: React.ReactNode;
  reference: any;
}) {
  return (
    <section className="py-10" ref={reference}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide mb-5">
        {title}
      </h2>
      {children}
    </section>
  );
}
