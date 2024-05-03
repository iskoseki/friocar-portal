import React from "react";

export interface Servicio {
  id: number;
  title: string;
  description: string;
  secundaryDescription: string;
  cover: string;
  gallery: string[];
}
export default function useServices() {
  const [data, setData] = React.useState<Servicio[]>();
  const [error, setError] = React.useState<Error | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    fetch("/servicios.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.servicos);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return { data, error, isLoading };
}
