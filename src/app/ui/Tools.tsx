export function Tool({ name }: { name: string }) {
  return (
    <span className="text-xs px-4 py-1 bg-neutral-500 rounded-3xl text-white">
      {name}
    </span>
  );
}

export function Tools({ tools }: { tools: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {tools.map((tool, index) => (
        <Tool name={tool} key={index} />
      ))}
    </div>
  );
}
