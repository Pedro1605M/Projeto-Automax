import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f1115]">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
        <p className="text-gray-400 mb-8">A página que você está procurando não existe.</p>
        <Link href="/" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors">
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
