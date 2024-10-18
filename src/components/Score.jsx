export default function Score({score}) {
  return (
    <div className="score">
      Score : {score < 15 ? score : "WIN"}
    </div>
  )
}
