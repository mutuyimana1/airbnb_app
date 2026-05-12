export default function Spinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex items-center gap-2">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className="h-3 w-3 rounded-full bg-[#FF5A5F] animate-bounce"
            style={{ animationDelay: `${index * 150}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
