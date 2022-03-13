/*
 *   This is the skeleton of the image card component
 *   @Author Philippe Pepinouz
 *
 */

function ImageCardSkeleton() {
  return (
    <div className="shadow rounded-xl p-4 max-w-sm w-full mx-auto border border-gray-200">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className=" h-48 bg-slate-200 rounded"></div>
          <div className="h-6 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCardSkeleton;
