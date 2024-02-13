interface HashLinkPageParams {
  params: {
    hashLink: string;
  };
}

const HashLinkPage = ({ params }: HashLinkPageParams) => {
  console.log(params.hashLink);

  return <div>Page</div>;
};

export default HashLinkPage;
