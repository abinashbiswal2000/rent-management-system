import { BounceLoader } from "react-spinners";
import { useState } from "react";
import { format } from "date-fns";

export default function DownloadButton() {

    const [loading, setLoading] = useState(false);

    async function handleDownload() {
        try {
            setLoading(true);

            const response = await fetch(
                `http://localhost:3000/downloadFullData`,
                {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );
            if (!response.ok) {
                throw new Error("Download Failed");
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            
            const a = document.createElement("a");
            a.href = url;
            const stamp = format(new Date(), "MMMdoyyyy-hhmma");
            a.download = `FullData-${stamp}.xlsx`;
            document.body.appendChild(a);
            a.click();
            a.remove();

            window.URL.revokeObjectURL(url);

        } catch (e) {
            console.error(e);
            alert("Download Failed");
        } finally {
            setLoading(false);
        }
    }

    return (
        <button
            type="button"
            className="cursor-pointer hover:bg-orange-300 transition duration-300 text-2xl border border-gray-300 rounded-lg h-32 flex items-center justify-center"
            onClick={handleDownload}
            disabled={loading}
        >
            Download Full Data {loading && <BounceLoader />}
        </button>
    )
}