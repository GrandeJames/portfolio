export default function Page({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide mb-5">
        {title}
      </h1>
      {children}
    </div>
  );
}
