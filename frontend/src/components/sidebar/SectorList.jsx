import SectorItem from './SectorItem.jsx';

export default function SectorList({ sectors }) {
  return (
    <nav className="space-y-1">
      {sectors.map(sector => (
        <SectorItem key={sector.id} sector={sector} />
      ))}
    </nav>
  );
}
