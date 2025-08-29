type TombolProps = { label: string; onClick: () => void; };

const Tombol = ({ label, onClick }: TombolProps) => (
  <button onClick={onClick}>{label}</button>
);
