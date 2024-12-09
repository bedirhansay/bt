export default function Home() {
  const list = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

  console.log(list);
  return (
    <div className="items-center justify-items-center min-h-screen p-8 text-6xl pb-20 text-center uppercase gap-16 mt-40 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Kendini hiç bir zaman üzme☺️
      <ul>
        {list.map((e) => (
          <li key={e}>
            Kimse senin kadar değerli değil
            <br />
            <span>Çünkü</span>
            <br />
            <span className="animate-pulse">!</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
