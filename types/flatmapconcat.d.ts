import { SpawnerOrObservable } from "./flatmap_";
import Observable from "./observable";
export default function flatMapConcat<V, V2>(src: Observable<V>, f: SpawnerOrObservable<V, V2>): Observable<V2>;
