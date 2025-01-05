export interface Influencer {
  id: number;
  name: string;
  url: string;
  bio: string;
  instagramHandle: string;
  instagramFollowers: string;
  type: string;
  gender: string;
  additionalLinks: [string, string][]
}


export function parseMarkdownToInfluencers(markdown: string): Influencer[] {
  const influencerRegex = /### (\d+)\.\s(?:\[(.+?)\]\((.+?)\)|(.+?))\s+?\*\*Bio\*\* (.+?)\s+?\*\*Instagram Handle\*\* \[(.+?)\]\((.+?)\)\s+?\*\*Instagram Followers\*\* (.+?)\s+?\*\*Type\*\* (.+?)\s+?\*\*Gender\*\* (.+?)(?:\s+?((?:\[\S+\]\(.+?\)\s*)+))?/g;

  const linkRegex = /\[(.+?)\]\((.+?)\)/g;

  const influencers: Influencer[] = [];
  let match;

  while ((match = influencerRegex.exec(markdown)) !== null) {
    const [,id, linkedName, profileUrl, plainName, bio, instagramHandle, instagramUrl, instagramFollowers, type, gender, linksBlock] = match;
    const name = linkedName || plainName; // Choose name based on what is available
    const additionalLinks: [string, string][] = [['Instagram',instagramUrl]];
    let linkMatch;
    while ((linkMatch = linkRegex.exec(linksBlock)) !== null) {
      additionalLinks.push([linkMatch[1],linkMatch[2]]); // Extract only URLs
    }

    influencers.push({
      id: parseInt(id, 10),
      name,
      url: profileUrl,
      bio,
      instagramHandle,
      instagramFollowers,
      type,
      gender,
      additionalLinks
    });
  }

  return influencers;
}
