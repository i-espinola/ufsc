import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const defaultOptions = {
  endpoint: '',
};

const Fetch = (props = defaultOptions) => {
  const { endpoint } = props;
  const { data, error } = useSWR(endpoint, fetcher);

  return {
    data,
    error,
    loading: !data && !error,
  };
};

export { Fetch };
