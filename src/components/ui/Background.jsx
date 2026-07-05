export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">

      <div className="absolute w-[600px] h-[600px] bg-purple-600/30 blur-[150px] rounded-full top-[-100px] left-[-100px]" />

      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[150px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:20px_20px]" />

    </div>
  );
}