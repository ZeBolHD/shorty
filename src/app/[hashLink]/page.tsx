interface HashLinkPageParams {
  params: {
    hashLink: string
  }
}

export default function HashLinkPage({ params }: HashLinkPageParams) {

  console.log(params.hashLink)

  return <div>Page</div>;
}