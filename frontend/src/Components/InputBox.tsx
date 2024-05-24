import { ChangeEvent } from "react";

interface InputBox {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function InputBox({ label, placeholder, type, onChange }: InputBox) {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <input
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className="w-full px-2 py-1 border rounded border-slate-200"
      />
    </div>
  );
}
