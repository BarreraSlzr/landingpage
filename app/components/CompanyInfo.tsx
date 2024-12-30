import { headers } from 'next/headers';
import content from '../content.json';

export default async function CompanyInfo() {
  const headersList = await headers()
  const country = headersList.get('X-Vercel-IP-Country') || 'default'
  const isFromMexico = country.toLowerCase() === 'mx'

  const address = isFromMexico ? 'Working Remote 🌐' : content.companyInfo.address2

  return (
    <section className="px-6 md:px-8 pb-12 pt-2">
      <div className="flex flex-col">
        <h1 className="text-lg font-medium h-5">{content.companyInfo.title}</h1>
        <p>{content.companyInfo.address1}</p>
        <p>{address}</p>
      </div>
    </section>
  );
}