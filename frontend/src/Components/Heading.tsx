interface Heading {
  label: string;
}

export function Heading({ label }: Heading) {
  return <div className="font-bold text-4xl pt-6">{label}</div>;
}
