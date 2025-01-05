'use client'
import { FC, useEffect, useState } from 'react';
import { Influencer, parseMarkdownToInfluencers } from './util';
import { influencers as rawInfluencers } from '@/influencers';

const InfluencersTable: FC = () => {
  const [influencers, setInfluencers] = useState<Influencer[]>([]);

  useEffect(() => {
    const loadMarkdown = async () => {
      const parsedInfluencers = parseMarkdownToInfluencers(rawInfluencers);
      setInfluencers(parsedInfluencers);
    };

    loadMarkdown();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Influencers</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Profile</th>
              <th className="border border-gray-300 px-4 py-2">Bio</th>
              <th className="border border-gray-300 px-4 py-2">Instagram Handle</th>
              <th className="border border-gray-300 px-4 py-2">Followers</th>
              <th className="border border-gray-300 px-4 py-2">Type</th>
              <th className="border border-gray-300 px-4 py-2">Gender</th>
            </tr>
          </thead>
          <tbody>
            {influencers.map((influencer) => (
              <tr key={influencer.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{influencer.id}</td>
                <td className="border border-gray-300 px-4 py-2">{influencer.name}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href={influencer.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2">{influencer.bio}</td>
                <td className="border border-gray-300 px-4 py-2">{influencer.instagramHandle}</td>
                <td className="border border-gray-300 px-4 py-2">{influencer.instagramFollowers}</td>
                <td className="border border-gray-300 px-4 py-2">{influencer.type}</td>
                <td className="border border-gray-300 px-4 py-2">{influencer.gender}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <ul className="list-disc list-inside">
                    {influencer.additionalLinks.map(([label, url], index) => (
                      <li key={index}>
                        <a
                          href={url}
                          className="text-blue-500 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {label.trim()}
                        </a>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InfluencersTable;
