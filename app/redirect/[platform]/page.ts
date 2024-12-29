import { platformUrls } from '@/libs/platformURLs'
import { log } from '@/libs/utils/logger'
import { redirect } from 'next/navigation'

type ParamProps = {
  platform: string
}

export default async function RedirectPage(props: { params: Promise<ParamProps> }) {
  const params = await props.params;
  const url = platformUrls[params.platform.toLowerCase()]

  if (url) {
    log(`Redirecting to ${params.platform}`, 'info', { url })
    redirect(url)
  } else {
    log(`Invalid platform: ${params.platform}`, 'warn')
    redirect('/')  // Redirect to homepage if platform is not found
  }
}

