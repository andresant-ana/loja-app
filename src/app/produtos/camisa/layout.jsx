import Camisa from "./page";

export default function CamisaLayout({children}) {
  return (
    <>
        <div>
            <p className="bg-red-300">Novas camisas de algodão...</p>
        </div>
        {children}
    </>
  )
}
