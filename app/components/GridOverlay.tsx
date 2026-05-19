export default function GridOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden xl:block">
      <div className="mx-auto grid h-full max-w-7xl grid-cols-12 gap-4 px-8">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-full bg-red-500/[0.05] border-x border-red-500/10"
          />
        ))}
      </div>
    </div>
  )
}
