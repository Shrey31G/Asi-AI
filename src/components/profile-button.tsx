export default async function ProfileButton() {
  return (
    <>
      <div className="flex w-[95%] flex-shrink-0 items-center justify-between gap-2 rounded-xl px-2">
        <div className="bg-foreground text-background flex size-10 flex-shrink-0 items-center justify-center rounded-full">
          B
        </div>
        <div className="min-w-0 flex-1 text-left">
          <p className="truncate font-medium text-white">Bur User</p>
          <p className="truncate text-sm text-white/70">bur@example.com</p>
        </div>
      </div>
    </>
  );
}
