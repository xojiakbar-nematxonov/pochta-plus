function StatItem({ value, label }) {
  return (
    <div className="space-y-2">
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-sm text-blue-200">{label}</p>
    </div>
  )
}

export default function StatsSection({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {stats.map((stat, index) => (
        <StatItem key={index} value={stat.value} label={stat.label} />
      ))}
    </div>
  )
}
