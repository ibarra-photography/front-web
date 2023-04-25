interface IParams {
  params: { photoId: string };
}

export default function Photo({ params }: IParams) {
  return <p>{params.photoId}</p>;
}
