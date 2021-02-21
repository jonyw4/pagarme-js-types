export interface Search<T = unknown> {
  _shards: {
    total: number;
    successful: number;
    failed: number;
  };
  hits: {
    total: number;
    max_score: number;
    hits: {
      _index: string;
      _type: string;
      _id: string;
      _score: number;
      _source: T;
    }[];
  };
  timed_out: boolean;
  took: number;
}
