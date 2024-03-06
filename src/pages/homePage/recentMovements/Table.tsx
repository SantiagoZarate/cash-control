import { Badge } from "@component";

export function Table() {
  return (
    <table className="relative w-full table-fixed bg-card rounded-lg overflow-hidden">
      <caption className="caption-bottom mt-4 text-sm">
        Showing only the last 5 movements
      </caption>
      <thead className="bg-border">
        <tr className="">
          <th className="text-start px-6 py-2">Song</th>
          <th className="text-start px-6 py-2">Amount</th>
          <th className="text-start px-6 py-2">Patner</th>
          <th className="text-start px-6 py-2">Date</th>
          <th className="text-start px-6 py-2">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border">
        <tr className="hover:bg-black/40 duration-150 transition">
          <td className="px-6 py-4">The Sliding Mr.</td>
          <td className="px-6 py-4 flex flex-col gap-1">
            <p className="text-primary-fg">$12.23 USD</p>
            <p className="text-xs">$214.11 ARS</p>
          </td>
          <td className="px-6 py-4">
            <div className="flex items-center gap-2">
              <img
                className="size-10 bg-green-800 rounded-full object-cover"
                src="https://cdn.pfps.gg/pfps/1766-silly-cat.png"
                alt=""
              />
              <div className="flex flex-col gap-1">
                <p className="text-border-active">Anibal Gonzalez</p>
                <p className="text-xs">Argentina</p>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 flex flex-col gap-1">
            <p>March 2,</p>
            <p>2024</p>
          </td>
          <td className="px-6 py-4">
            <Badge className="bg-green-300 font-bold text-green-700 w-fit">
              Completed
            </Badge>
          </td>
        </tr>
        <tr className="hover:bg-black/40 duration-150 transition">
          <td className="px-6 py-4">The Sliding Mr.</td>
          <td className="px-6 py-4 flex flex-col gap-1">
            <p className="text-primary-fg">$12.23 USD</p>
            <p className="text-xs">$214.11 ARS</p>
          </td>
          <td className="px-6 py-4">
            <div className="flex items-center gap-2">
              <img
                className="size-10 bg-green-800 rounded-full object-cover"
                src="https://cdn.pfps.gg/pfps/1766-silly-cat.png"
                alt=""
              />
              <div className="flex flex-col gap-1">
                <p className="text-border-active">Anibal Gonzalez</p>
                <p className="text-xs">Argentina</p>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 flex flex-col gap-1">
            <p>March 2,</p>
            <p>2024</p>
          </td>
          <td className="px-6 py-4">
            <Badge className="bg-green-300 font-bold text-green-700 w-fit">
              Completed
            </Badge>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
