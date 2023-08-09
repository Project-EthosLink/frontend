import style from "../Style.module.css"

export default function Attestation() {
    return (
    <div className=" mt-52 text-white p-24">
      <h1>Attestation</h1>
      <button className={`relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 hover:shadow-none px-4 ${style.buttonBorderGradient} ${style.shadowButton}`}>click here</button>
    </div>
  );
  

}