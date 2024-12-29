import content from '../content.json';

export default function CompanyInfo() {
  return (
    <section className="px-6 md:px-8 py-12">
      <div className="space-y-1">
        <h1 className="text-xl font-medium">{content.companyInfo.title}</h1>
        <p className="text-lg">{content.companyInfo.address1}</p>
        <p className="text-lg">{content.companyInfo.address2}</p>
      </div>
    </section>
  );
}