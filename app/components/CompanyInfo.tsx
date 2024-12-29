import content from '../content.json';

export default function CompanyInfo() {
  return (
    <section className="px-6 md:px-8 pb-12 pt-2">
      <div className="flex flex-col">
        <h1 className="text-lg font-medium h-5">{content.companyInfo.title}</h1>
        <p>{content.companyInfo.address1}</p>
        <p>{content.companyInfo.address2}</p>
      </div>
    </section>
  );
}