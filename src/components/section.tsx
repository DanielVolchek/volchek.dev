export default function Section({
  header,
  headerClasses = "",
  p,
  pClasses = "",
}: {
  header: React.ReactNode;
  headerClasses?: string;
  p: React.ReactNode;
  pClasses?: string;
}) {
  return (
    <section className="my-2">
      <h3 className={`text-xl ${headerClasses} mb-1`}>{header}</h3>
      <p className={`text-gray-600 ${pClasses}`}>{p}</p>
    </section>
  );
}
