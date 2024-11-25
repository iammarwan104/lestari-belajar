import { GarisPerbatasan, ScatterData } from "@/app/lib/interface";

export default function PelPal({
  datas,
  garisPerbatasan,
}: {
  datas: ScatterData[];
  garisPerbatasan: GarisPerbatasan;
}) {
  function penentuanStatus(
    name: string,
    nilaiX: number,
    nilaiY: number,
    garisPerbatasan: GarisPerbatasan,
    komentars: (string | null)[]
  ) {
    if (
      nilaiX <= garisPerbatasan.sumbuX === true &&
      nilaiY <= garisPerbatasan.sumbuY === false
    ) {
      return (
        <div key={name} className={`p-4 rounded-lg bg-red-500`}>
          <h1 className="text-lg font-semibold mb-4">{name}</h1>
          <div className="min-h-fit max-min-h-fit max-h-[10rem] overflow-y-scroll flex flex-col gap-2">
            {komentars.some((index) => index !== null) ? (
              komentars.map((komentar, index) => {
                return !komentar ? null : (
                  <p key={index} className="p-2 rounded-lg border text-base">
                    {komentar}
                  </p>
                );
              })
            ) : (
              <p className="p-2 rounded-lg border text-base">
                Tidak ada komentar
              </p>
            )}
          </div>
        </div>
      );
    }
    if (
      nilaiX <= garisPerbatasan.sumbuX === false &&
      nilaiY <= garisPerbatasan.sumbuY === false
    ) {
      return (
        <div
          key={name}
          className={`text-lg font-semibold p-4 rounded-lg bg-green-400`}>
          <h1 className="text-lg font-semibold mb-4">{name}</h1>
          <div className="min-h-fit max-h-[10rem] overflow-y-scroll flex flex-col gap-2">
            {komentars.some((index) => index !== null) ? (
              komentars.map((komentar, index) => {
                return !komentar ? null : (
                  <p key={index} className="p-2 rounded-lg border text-base">
                    {komentar}
                  </p>
                );
              })
            ) : (
              <p className="p-2 rounded-lg border text-base">
                Tidak ada komentar
              </p>
            )}
          </div>
        </div>
      );
    }
    if (
      nilaiX <= garisPerbatasan.sumbuX === true &&
      nilaiY <= garisPerbatasan.sumbuY === true
    ) {
      return (
        <div
          key={name}
          className={`text-lg font-semibold p-4 rounded-lg bg-yellow-300`}>
          <h1 className="text-lg font-semibold mb-4">{name}</h1>
          <div className="min-h-fit max-h-[10rem] overflow-y-scroll flex flex-col gap-2">
            {komentars.some((index) => index !== null) ? (
              komentars.map((komentar, index) => {
                return !komentar ? null : (
                  <p key={index} className="p-2 rounded-lg border text-base">
                    {komentar}
                  </p>
                );
              })
            ) : (
              <p className="p-2 rounded-lg border text-base">
                Tidak ada komentar
              </p>
            )}
          </div>
        </div>
      );
    }
    if (
      nilaiX <= garisPerbatasan.sumbuX === false &&
      nilaiY <= garisPerbatasan.sumbuY === true
    ) {
      return (
        <div
          key={name}
          className={`text-lg font-semibold p-4 rounded-lg bg-blue-500`}>
          <h1 className="text-lg font-semibold mb-4">{name}</h1>
          <div className="min-h-fit max-h-[10rem] overflow-y-scroll flex flex-col gap-2">
            {komentars.some((index) => index !== null) ? (
              komentars.map((komentar, index) => {
                return !komentar ? null : (
                  <p key={index} className="p-2 rounded-lg border text-base">
                    {komentar}
                  </p>
                );
              })
            ) : (
              <p className="p-2 rounded-lg border text-base">
                Tidak ada komentar
              </p>
            )}
          </div>
        </div>
      );
    }
  }

  return (
    <>
      <div className="w-full h-[15rem] xl:h-[334px] bg-gray-800 p-4 rounded-lg overflow-y-scroll flex flex-col gap-4">
        {datas.map((data) =>
          penentuanStatus(
            data.name,
            data.x,
            data.y,
            garisPerbatasan,
            data.komentars
          )
        )}
      </div>
    </>
  );
}
