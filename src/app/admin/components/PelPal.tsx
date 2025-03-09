import { GarisPerbatasan, ScatterData } from "@/app/lib/interface";

export default function PelPal({
  datas,
  garisPerbatasan,
}: {
  datas: ScatterData[];
  garisPerbatasan: GarisPerbatasan;
}) {
  function penentuanStatusKepentingan(
    name: string,
    nilaiX: number,
    nilaiY: number,
    garisPerbatasan: GarisPerbatasan,
    komentar_kepentingan: (string | null)[] | undefined,
  ) {
    if (
      nilaiX >= garisPerbatasan.sumbuX === false &&
      nilaiY >= garisPerbatasan.sumbuY === true
    ) {
      return (
        <div key={name} className={`p-4 rounded-lg bg-red-500`}>
          <h1 className="text-lg text-white font-semibold mb-4">{name}</h1>
          <div className="min-h-fit max-min-h-fit max-h-[10rem] overflow-y-scroll flex flex-col gap-2">
            {komentar_kepentingan?.some((index) => index !== null) ? (
              komentar_kepentingan?.map((komentar, index) => {
                return !komentar ? null : (
                  <p key={index} className="p-2 text-white rounded-lg border text-base">
                    {komentar}
                  </p>
                );
              })
            ) : (
              <p className="p-2 rounded-lg text-white border text-base">
                Tidak ada komentar
              </p>
            )}
          </div>
        </div>
      );
    }
    if (
      nilaiX >= garisPerbatasan.sumbuX === true &&
      nilaiY >= garisPerbatasan.sumbuY === true
    ) {
      return (
        <div
          key={name}
          className={`text-lg font-semibold p-4 rounded-lg bg-green-400`}>
          <h1 className="text-lg text-white font-semibold mb-4">{name}</h1>
          <div className="min-h-fit max-h-[10rem] overflow-y-scroll flex flex-col gap-2">
            {komentar_kepentingan?.some((index) => index !== null) ? (
              komentar_kepentingan?.map((komentar, index) => {
                return !komentar ? null : (
                  <p key={index} className="p-2 rounded-lg text-white border text-base">
                    {komentar}
                  </p>
                );
              })
            ) : (
              <p className="p-2 rounded-lg text-white border text-base">
                Tidak ada komentar
              </p>
            )}
          </div>
        </div>
      );
    }
    if (
      nilaiX >= garisPerbatasan.sumbuX === false &&
      nilaiY >= garisPerbatasan.sumbuY === false
    ) {
      return (
        <div
          key={name}
          className={`text-lg font-semibold p-4 rounded-lg bg-yellow-300`}>
          <h1 className="text-lg text-white font-semibold mb-4">{name}</h1>
          <div className="min-h-fit max-h-[10rem] overflow-y-scroll flex flex-col gap-2">
            {komentar_kepentingan?.some((index) => index !== null) ? (
              komentar_kepentingan?.map((komentar, index) => {
                return !komentar ? null : (
                  <p key={index} className="p-2 rounded-lg text-white border text-base">
                    {komentar}
                  </p>
                );
              })
            ) : (
              <p className="p-2 rounded-lg text-white border text-base">
                Tidak ada komentar
              </p>
            )}
          </div>
        </div>
      );
    }
    if (
      nilaiX >= garisPerbatasan.sumbuX === true &&
      nilaiY >= garisPerbatasan.sumbuY === false
    ) {
      return (
        <div
          key={name}
          className={`text-lg font-semibold p-4 rounded-lg bg-blue-500`}>
          <h1 className="text-lg text-white font-semibold mb-4">{name}</h1>
          <div className="min-h-fit max-h-[10rem] overflow-y-scroll flex flex-col gap-2">
            {komentar_kepentingan?.some((index) => index !== null) ? (
              komentar_kepentingan?.map((komentar, index) => {
                return !komentar ? null : (
                  <p key={index} className="p-2 rounded-lg text-white border text-base">
                    {komentar}
                  </p>
                );
              })
            ) : (
              <p className="p-2 rounded-lg text-white border text-base">
                Tidak ada komentar
              </p>
            )}
          </div>
        </div>
      );
    }
  }

  function penentuanStatusKinerja(
    name: string,
    nilaiX: number,
    nilaiY: number,
    garisPerbatasan: GarisPerbatasan,
    komentar_kinerja: (string | null)[] | undefined,
  ) {
    if (
      nilaiX >= garisPerbatasan.sumbuX === false &&
      nilaiY >= garisPerbatasan.sumbuY === true
    ) {
      return (
        <div key={name} className={`p-4 rounded-lg bg-red-500`}>
          <h1 className="text-lg text-white font-semibold mb-4">{name}</h1>
          <div className="min-h-fit max-min-h-fit max-h-[10rem] overflow-y-scroll flex flex-col gap-2">
            {komentar_kinerja?.some((index) => index !== null) ? (
              komentar_kinerja?.map((komentar, index) => {
                return !komentar ? null : (
                  <p key={index} className="p-2 text-white rounded-lg border text-base">
                    {komentar}
                  </p>
                );
              })
            ) : (
              <p className="p-2 rounded-lg text-white border text-base">
                Tidak ada komentar
              </p>
            )}
          </div>
        </div>
      );
    }
    if (
      nilaiX >= garisPerbatasan.sumbuX === true &&
      nilaiY >= garisPerbatasan.sumbuY === true
    ) {
      return (
        <div
          key={name}
          className={`text-lg font-semibold p-4 rounded-lg bg-green-400`}>
          <h1 className="text-lg text-white font-semibold mb-4">{name}</h1>
          <div className="min-h-fit max-h-[10rem] overflow-y-scroll flex flex-col gap-2">
            {komentar_kinerja?.some((index) => index !== null) ? (
              komentar_kinerja?.map((komentar, index) => {
                return !komentar ? null : (
                  <p key={index} className="p-2 rounded-lg text-white border text-base">
                    {komentar}
                  </p>
                );
              })
            ) : (
              <p className="p-2 rounded-lg text-white border text-base">
                Tidak ada komentar
              </p>
            )}
          </div>
        </div>
      );
    }
    if (
      nilaiX >= garisPerbatasan.sumbuX === false &&
      nilaiY >= garisPerbatasan.sumbuY === false
    ) {
      return (
        <div
          key={name}
          className={`text-lg font-semibold p-4 rounded-lg bg-yellow-300`}>
          <h1 className="text-lg text-white font-semibold mb-4">{name}</h1>
          <div className="min-h-fit max-h-[10rem] overflow-y-scroll flex flex-col gap-2">
            {komentar_kinerja?.some((index) => index !== null) ? (
              komentar_kinerja?.map((komentar, index) => {
                return !komentar ? null : (
                  <p key={index} className="p-2 rounded-lg text-white border text-base">
                    {komentar}
                  </p>
                );
              })
            ) : (
              <p className="p-2 rounded-lg text-white border text-base">
                Tidak ada komentar
              </p>
            )}
          </div>
        </div>
      );
    }
    if (
      nilaiX < garisPerbatasan.sumbuX === true &&
      nilaiY < garisPerbatasan.sumbuY === false
    ) {
      return (
        <div
          key={name}
          className={`text-lg font-semibold p-4 rounded-lg bg-blue-500`}>
          <h1 className="text-lg text-white font-semibold mb-4">{name}</h1>
          <div className="min-h-fit max-h-[10rem] overflow-y-scroll flex flex-col gap-2">
            {komentar_kinerja?.some((index) => index !== null) ? (
              komentar_kinerja?.map((komentar, index) => {
                return !komentar ? null : (
                  <p key={index} className="p-2 rounded-lg text-white border text-base">
                    {komentar}
                  </p>
                );
              })
            ) : (
              <p className="p-2 rounded-lg text-white border text-base">
                Tidak ada komentar
              </p>
            )}
          </div>
        </div>
      );
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-4">
      <div className="w-full h-[15rem] xl:h-[334px] bg-gray-800 p-4 rounded-lg overflow-y-scroll flex flex-col gap-4">
        <h1 className="text-center font-semibold text-xl">Komentar Kepentingan Layanan</h1>
        {datas.map((data) =>
          penentuanStatusKepentingan(
            data.name,
            data.x,
            data.y,
            garisPerbatasan,
            data.komentar_kepentingan,
          )
        )}
      </div>
      <div className="w-full h-[15rem] xl:h-[334px] bg-gray-800 p-4 rounded-lg overflow-y-scroll flex flex-col gap-4">
        <h1 className="text-center font-semibold text-xl">Komentar Kinerja atau kepuasan Layanan</h1>
        {datas.map((data) =>
          penentuanStatusKinerja(
            data.name,
            data.x,
            data.y,
            garisPerbatasan,
            data.komentar_kinerja,
          )
        )}
      </div>
    </div>
  );
}
