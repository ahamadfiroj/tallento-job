'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function DevelopmentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const action = searchParams.get('action') || 'Feature';

  const handleBackClick = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Back Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={handleBackClick}
          className="bg-gradient-to-r from-red-400 to-pink-400 hover:shadow-lg hover:scale-105 transition-all duration-200 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-purple-500/50 backdrop-blur-sm rounded-2xl p-12 relative">
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {action} is in Development Phase
            </h1>
            <p className="text-gray-300 text-lg">
              This feature is currently under development and will be available soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}