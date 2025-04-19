
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Fichier
 * 
 */
export type Fichier = $Result.DefaultSelection<Prisma.$FichierPayload>
/**
 * Model Membre
 * 
 */
export type Membre = $Result.DefaultSelection<Prisma.$MembrePayload>
/**
 * Model Profil
 * 
 */
export type Profil = $Result.DefaultSelection<Prisma.$ProfilPayload>
/**
 * Model CategorieActivite
 * 
 */
export type CategorieActivite = $Result.DefaultSelection<Prisma.$CategorieActivitePayload>
/**
 * Model Activite
 * 
 */
export type Activite = $Result.DefaultSelection<Prisma.$ActivitePayload>
/**
 * Model MembreActivite
 * 
 */
export type MembreActivite = $Result.DefaultSelection<Prisma.$MembreActivitePayload>
/**
 * Model Article
 * 
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleTypes: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  REDAC: 'REDAC'
};

export type RoleTypes = (typeof RoleTypes)[keyof typeof RoleTypes]


export const StatutArticleTypes: {
  BROUILLON: 'BROUILLON',
  PUBLIE: 'PUBLIE',
  CORBEILLE: 'CORBEILLE'
};

export type StatutArticleTypes = (typeof StatutArticleTypes)[keyof typeof StatutArticleTypes]


export const CategorieArticleTypes: {
  ACCUEIL: 'ACCUEIL',
  ANNONCE: 'ANNONCE',
  INFOS: 'INFOS'
};

export type CategorieArticleTypes = (typeof CategorieArticleTypes)[keyof typeof CategorieArticleTypes]


export const FileTypes: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  AUDIO: 'AUDIO',
  DOCUMENT: 'DOCUMENT',
  AUTRE: 'AUTRE'
};

export type FileTypes = (typeof FileTypes)[keyof typeof FileTypes]

}

export type RoleTypes = $Enums.RoleTypes

export const RoleTypes: typeof $Enums.RoleTypes

export type StatutArticleTypes = $Enums.StatutArticleTypes

export const StatutArticleTypes: typeof $Enums.StatutArticleTypes

export type CategorieArticleTypes = $Enums.CategorieArticleTypes

export const CategorieArticleTypes: typeof $Enums.CategorieArticleTypes

export type FileTypes = $Enums.FileTypes

export const FileTypes: typeof $Enums.FileTypes

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Fichiers
 * const fichiers = await prisma.fichier.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Fichiers
   * const fichiers = await prisma.fichier.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.fichier`: Exposes CRUD operations for the **Fichier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fichiers
    * const fichiers = await prisma.fichier.findMany()
    * ```
    */
  get fichier(): Prisma.FichierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membre`: Exposes CRUD operations for the **Membre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Membres
    * const membres = await prisma.membre.findMany()
    * ```
    */
  get membre(): Prisma.MembreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profil`: Exposes CRUD operations for the **Profil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profils
    * const profils = await prisma.profil.findMany()
    * ```
    */
  get profil(): Prisma.ProfilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorieActivite`: Exposes CRUD operations for the **CategorieActivite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategorieActivites
    * const categorieActivites = await prisma.categorieActivite.findMany()
    * ```
    */
  get categorieActivite(): Prisma.CategorieActiviteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activite`: Exposes CRUD operations for the **Activite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activites
    * const activites = await prisma.activite.findMany()
    * ```
    */
  get activite(): Prisma.ActiviteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membreActivite`: Exposes CRUD operations for the **MembreActivite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MembreActivites
    * const membreActivites = await prisma.membreActivite.findMany()
    * ```
    */
  get membreActivite(): Prisma.MembreActiviteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Fichier: 'Fichier',
    Membre: 'Membre',
    Profil: 'Profil',
    CategorieActivite: 'CategorieActivite',
    Activite: 'Activite',
    MembreActivite: 'MembreActivite',
    Article: 'Article'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "fichier" | "membre" | "profil" | "categorieActivite" | "activite" | "membreActivite" | "article"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Fichier: {
        payload: Prisma.$FichierPayload<ExtArgs>
        fields: Prisma.FichierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FichierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FichierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichierPayload>
          }
          findFirst: {
            args: Prisma.FichierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FichierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichierPayload>
          }
          findMany: {
            args: Prisma.FichierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichierPayload>[]
          }
          create: {
            args: Prisma.FichierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichierPayload>
          }
          createMany: {
            args: Prisma.FichierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FichierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichierPayload>[]
          }
          delete: {
            args: Prisma.FichierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichierPayload>
          }
          update: {
            args: Prisma.FichierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichierPayload>
          }
          deleteMany: {
            args: Prisma.FichierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FichierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FichierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichierPayload>[]
          }
          upsert: {
            args: Prisma.FichierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichierPayload>
          }
          aggregate: {
            args: Prisma.FichierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFichier>
          }
          groupBy: {
            args: Prisma.FichierGroupByArgs<ExtArgs>
            result: $Utils.Optional<FichierGroupByOutputType>[]
          }
          count: {
            args: Prisma.FichierCountArgs<ExtArgs>
            result: $Utils.Optional<FichierCountAggregateOutputType> | number
          }
        }
      }
      Membre: {
        payload: Prisma.$MembrePayload<ExtArgs>
        fields: Prisma.MembreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>
          }
          findFirst: {
            args: Prisma.MembreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>
          }
          findMany: {
            args: Prisma.MembreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>[]
          }
          create: {
            args: Prisma.MembreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>
          }
          createMany: {
            args: Prisma.MembreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>[]
          }
          delete: {
            args: Prisma.MembreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>
          }
          update: {
            args: Prisma.MembreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>
          }
          deleteMany: {
            args: Prisma.MembreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>[]
          }
          upsert: {
            args: Prisma.MembreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>
          }
          aggregate: {
            args: Prisma.MembreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembre>
          }
          groupBy: {
            args: Prisma.MembreGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembreGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembreCountArgs<ExtArgs>
            result: $Utils.Optional<MembreCountAggregateOutputType> | number
          }
        }
      }
      Profil: {
        payload: Prisma.$ProfilPayload<ExtArgs>
        fields: Prisma.ProfilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload>
          }
          findFirst: {
            args: Prisma.ProfilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload>
          }
          findMany: {
            args: Prisma.ProfilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload>[]
          }
          create: {
            args: Prisma.ProfilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload>
          }
          createMany: {
            args: Prisma.ProfilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfilCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload>[]
          }
          delete: {
            args: Prisma.ProfilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload>
          }
          update: {
            args: Prisma.ProfilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload>
          }
          deleteMany: {
            args: Prisma.ProfilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfilUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload>[]
          }
          upsert: {
            args: Prisma.ProfilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload>
          }
          aggregate: {
            args: Prisma.ProfilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfil>
          }
          groupBy: {
            args: Prisma.ProfilGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfilCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilCountAggregateOutputType> | number
          }
        }
      }
      CategorieActivite: {
        payload: Prisma.$CategorieActivitePayload<ExtArgs>
        fields: Prisma.CategorieActiviteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategorieActiviteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieActivitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategorieActiviteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieActivitePayload>
          }
          findFirst: {
            args: Prisma.CategorieActiviteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieActivitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategorieActiviteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieActivitePayload>
          }
          findMany: {
            args: Prisma.CategorieActiviteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieActivitePayload>[]
          }
          create: {
            args: Prisma.CategorieActiviteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieActivitePayload>
          }
          createMany: {
            args: Prisma.CategorieActiviteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategorieActiviteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieActivitePayload>[]
          }
          delete: {
            args: Prisma.CategorieActiviteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieActivitePayload>
          }
          update: {
            args: Prisma.CategorieActiviteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieActivitePayload>
          }
          deleteMany: {
            args: Prisma.CategorieActiviteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategorieActiviteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategorieActiviteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieActivitePayload>[]
          }
          upsert: {
            args: Prisma.CategorieActiviteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieActivitePayload>
          }
          aggregate: {
            args: Prisma.CategorieActiviteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorieActivite>
          }
          groupBy: {
            args: Prisma.CategorieActiviteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategorieActiviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategorieActiviteCountArgs<ExtArgs>
            result: $Utils.Optional<CategorieActiviteCountAggregateOutputType> | number
          }
        }
      }
      Activite: {
        payload: Prisma.$ActivitePayload<ExtArgs>
        fields: Prisma.ActiviteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActiviteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActiviteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload>
          }
          findFirst: {
            args: Prisma.ActiviteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActiviteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload>
          }
          findMany: {
            args: Prisma.ActiviteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload>[]
          }
          create: {
            args: Prisma.ActiviteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload>
          }
          createMany: {
            args: Prisma.ActiviteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActiviteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload>[]
          }
          delete: {
            args: Prisma.ActiviteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload>
          }
          update: {
            args: Prisma.ActiviteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload>
          }
          deleteMany: {
            args: Prisma.ActiviteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActiviteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActiviteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload>[]
          }
          upsert: {
            args: Prisma.ActiviteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload>
          }
          aggregate: {
            args: Prisma.ActiviteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivite>
          }
          groupBy: {
            args: Prisma.ActiviteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActiviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActiviteCountArgs<ExtArgs>
            result: $Utils.Optional<ActiviteCountAggregateOutputType> | number
          }
        }
      }
      MembreActivite: {
        payload: Prisma.$MembreActivitePayload<ExtArgs>
        fields: Prisma.MembreActiviteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembreActiviteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreActivitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembreActiviteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreActivitePayload>
          }
          findFirst: {
            args: Prisma.MembreActiviteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreActivitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembreActiviteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreActivitePayload>
          }
          findMany: {
            args: Prisma.MembreActiviteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreActivitePayload>[]
          }
          create: {
            args: Prisma.MembreActiviteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreActivitePayload>
          }
          createMany: {
            args: Prisma.MembreActiviteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembreActiviteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreActivitePayload>[]
          }
          delete: {
            args: Prisma.MembreActiviteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreActivitePayload>
          }
          update: {
            args: Prisma.MembreActiviteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreActivitePayload>
          }
          deleteMany: {
            args: Prisma.MembreActiviteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembreActiviteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembreActiviteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreActivitePayload>[]
          }
          upsert: {
            args: Prisma.MembreActiviteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreActivitePayload>
          }
          aggregate: {
            args: Prisma.MembreActiviteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembreActivite>
          }
          groupBy: {
            args: Prisma.MembreActiviteGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembreActiviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembreActiviteCountArgs<ExtArgs>
            result: $Utils.Optional<MembreActiviteCountAggregateOutputType> | number
          }
        }
      }
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    fichier?: FichierOmit
    membre?: MembreOmit
    profil?: ProfilOmit
    categorieActivite?: CategorieActiviteOmit
    activite?: ActiviteOmit
    membreActivite?: MembreActiviteOmit
    article?: ArticleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FichierCountOutputType
   */

  export type FichierCountOutputType = {
    articles: number
    categoriesActivites: number
    profils: number
  }

  export type FichierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | FichierCountOutputTypeCountArticlesArgs
    categoriesActivites?: boolean | FichierCountOutputTypeCountCategoriesActivitesArgs
    profils?: boolean | FichierCountOutputTypeCountProfilsArgs
  }

  // Custom InputTypes
  /**
   * FichierCountOutputType without action
   */
  export type FichierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FichierCountOutputType
     */
    select?: FichierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FichierCountOutputType without action
   */
  export type FichierCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }

  /**
   * FichierCountOutputType without action
   */
  export type FichierCountOutputTypeCountCategoriesActivitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategorieActiviteWhereInput
  }

  /**
   * FichierCountOutputType without action
   */
  export type FichierCountOutputTypeCountProfilsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfilWhereInput
  }


  /**
   * Count Type MembreCountOutputType
   */

  export type MembreCountOutputType = {
    inscriptions: number
    articles: number
  }

  export type MembreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscriptions?: boolean | MembreCountOutputTypeCountInscriptionsArgs
    articles?: boolean | MembreCountOutputTypeCountArticlesArgs
  }

  // Custom InputTypes
  /**
   * MembreCountOutputType without action
   */
  export type MembreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreCountOutputType
     */
    select?: MembreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MembreCountOutputType without action
   */
  export type MembreCountOutputTypeCountInscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembreActiviteWhereInput
  }

  /**
   * MembreCountOutputType without action
   */
  export type MembreCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }


  /**
   * Count Type CategorieActiviteCountOutputType
   */

  export type CategorieActiviteCountOutputType = {
    activites: number
  }

  export type CategorieActiviteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activites?: boolean | CategorieActiviteCountOutputTypeCountActivitesArgs
  }

  // Custom InputTypes
  /**
   * CategorieActiviteCountOutputType without action
   */
  export type CategorieActiviteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieActiviteCountOutputType
     */
    select?: CategorieActiviteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategorieActiviteCountOutputType without action
   */
  export type CategorieActiviteCountOutputTypeCountActivitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActiviteWhereInput
  }


  /**
   * Count Type ActiviteCountOutputType
   */

  export type ActiviteCountOutputType = {
    participants: number
  }

  export type ActiviteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | ActiviteCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * ActiviteCountOutputType without action
   */
  export type ActiviteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiviteCountOutputType
     */
    select?: ActiviteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActiviteCountOutputType without action
   */
  export type ActiviteCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembreActiviteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Fichier
   */

  export type AggregateFichier = {
    _count: FichierCountAggregateOutputType | null
    _avg: FichierAvgAggregateOutputType | null
    _sum: FichierSumAggregateOutputType | null
    _min: FichierMinAggregateOutputType | null
    _max: FichierMaxAggregateOutputType | null
  }

  export type FichierAvgAggregateOutputType = {
    id: number | null
  }

  export type FichierSumAggregateOutputType = {
    id: number | null
  }

  export type FichierMinAggregateOutputType = {
    id: number | null
    nom: string | null
    url: string | null
    type: $Enums.FileTypes | null
    mime: string | null
    taille: string | null
    dateCreation: Date | null
    dateMaj: Date | null
  }

  export type FichierMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    url: string | null
    type: $Enums.FileTypes | null
    mime: string | null
    taille: string | null
    dateCreation: Date | null
    dateMaj: Date | null
  }

  export type FichierCountAggregateOutputType = {
    id: number
    nom: number
    url: number
    type: number
    mime: number
    taille: number
    dateCreation: number
    dateMaj: number
    _all: number
  }


  export type FichierAvgAggregateInputType = {
    id?: true
  }

  export type FichierSumAggregateInputType = {
    id?: true
  }

  export type FichierMinAggregateInputType = {
    id?: true
    nom?: true
    url?: true
    type?: true
    mime?: true
    taille?: true
    dateCreation?: true
    dateMaj?: true
  }

  export type FichierMaxAggregateInputType = {
    id?: true
    nom?: true
    url?: true
    type?: true
    mime?: true
    taille?: true
    dateCreation?: true
    dateMaj?: true
  }

  export type FichierCountAggregateInputType = {
    id?: true
    nom?: true
    url?: true
    type?: true
    mime?: true
    taille?: true
    dateCreation?: true
    dateMaj?: true
    _all?: true
  }

  export type FichierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fichier to aggregate.
     */
    where?: FichierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fichiers to fetch.
     */
    orderBy?: FichierOrderByWithRelationInput | FichierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FichierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fichiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fichiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fichiers
    **/
    _count?: true | FichierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FichierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FichierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FichierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FichierMaxAggregateInputType
  }

  export type GetFichierAggregateType<T extends FichierAggregateArgs> = {
        [P in keyof T & keyof AggregateFichier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFichier[P]>
      : GetScalarType<T[P], AggregateFichier[P]>
  }




  export type FichierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FichierWhereInput
    orderBy?: FichierOrderByWithAggregationInput | FichierOrderByWithAggregationInput[]
    by: FichierScalarFieldEnum[] | FichierScalarFieldEnum
    having?: FichierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FichierCountAggregateInputType | true
    _avg?: FichierAvgAggregateInputType
    _sum?: FichierSumAggregateInputType
    _min?: FichierMinAggregateInputType
    _max?: FichierMaxAggregateInputType
  }

  export type FichierGroupByOutputType = {
    id: number
    nom: string
    url: string
    type: $Enums.FileTypes
    mime: string
    taille: string
    dateCreation: Date
    dateMaj: Date
    _count: FichierCountAggregateOutputType | null
    _avg: FichierAvgAggregateOutputType | null
    _sum: FichierSumAggregateOutputType | null
    _min: FichierMinAggregateOutputType | null
    _max: FichierMaxAggregateOutputType | null
  }

  type GetFichierGroupByPayload<T extends FichierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FichierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FichierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FichierGroupByOutputType[P]>
            : GetScalarType<T[P], FichierGroupByOutputType[P]>
        }
      >
    >


  export type FichierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    url?: boolean
    type?: boolean
    mime?: boolean
    taille?: boolean
    dateCreation?: boolean
    dateMaj?: boolean
    articles?: boolean | Fichier$articlesArgs<ExtArgs>
    categoriesActivites?: boolean | Fichier$categoriesActivitesArgs<ExtArgs>
    profils?: boolean | Fichier$profilsArgs<ExtArgs>
    _count?: boolean | FichierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fichier"]>

  export type FichierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    url?: boolean
    type?: boolean
    mime?: boolean
    taille?: boolean
    dateCreation?: boolean
    dateMaj?: boolean
  }, ExtArgs["result"]["fichier"]>

  export type FichierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    url?: boolean
    type?: boolean
    mime?: boolean
    taille?: boolean
    dateCreation?: boolean
    dateMaj?: boolean
  }, ExtArgs["result"]["fichier"]>

  export type FichierSelectScalar = {
    id?: boolean
    nom?: boolean
    url?: boolean
    type?: boolean
    mime?: boolean
    taille?: boolean
    dateCreation?: boolean
    dateMaj?: boolean
  }

  export type FichierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "url" | "type" | "mime" | "taille" | "dateCreation" | "dateMaj", ExtArgs["result"]["fichier"]>
  export type FichierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | Fichier$articlesArgs<ExtArgs>
    categoriesActivites?: boolean | Fichier$categoriesActivitesArgs<ExtArgs>
    profils?: boolean | Fichier$profilsArgs<ExtArgs>
    _count?: boolean | FichierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FichierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FichierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FichierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fichier"
    objects: {
      articles: Prisma.$ArticlePayload<ExtArgs>[]
      categoriesActivites: Prisma.$CategorieActivitePayload<ExtArgs>[]
      profils: Prisma.$ProfilPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      url: string
      type: $Enums.FileTypes
      mime: string
      taille: string
      dateCreation: Date
      dateMaj: Date
    }, ExtArgs["result"]["fichier"]>
    composites: {}
  }

  type FichierGetPayload<S extends boolean | null | undefined | FichierDefaultArgs> = $Result.GetResult<Prisma.$FichierPayload, S>

  type FichierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FichierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FichierCountAggregateInputType | true
    }

  export interface FichierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fichier'], meta: { name: 'Fichier' } }
    /**
     * Find zero or one Fichier that matches the filter.
     * @param {FichierFindUniqueArgs} args - Arguments to find a Fichier
     * @example
     * // Get one Fichier
     * const fichier = await prisma.fichier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FichierFindUniqueArgs>(args: SelectSubset<T, FichierFindUniqueArgs<ExtArgs>>): Prisma__FichierClient<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fichier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FichierFindUniqueOrThrowArgs} args - Arguments to find a Fichier
     * @example
     * // Get one Fichier
     * const fichier = await prisma.fichier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FichierFindUniqueOrThrowArgs>(args: SelectSubset<T, FichierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FichierClient<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fichier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichierFindFirstArgs} args - Arguments to find a Fichier
     * @example
     * // Get one Fichier
     * const fichier = await prisma.fichier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FichierFindFirstArgs>(args?: SelectSubset<T, FichierFindFirstArgs<ExtArgs>>): Prisma__FichierClient<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fichier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichierFindFirstOrThrowArgs} args - Arguments to find a Fichier
     * @example
     * // Get one Fichier
     * const fichier = await prisma.fichier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FichierFindFirstOrThrowArgs>(args?: SelectSubset<T, FichierFindFirstOrThrowArgs<ExtArgs>>): Prisma__FichierClient<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fichiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fichiers
     * const fichiers = await prisma.fichier.findMany()
     * 
     * // Get first 10 Fichiers
     * const fichiers = await prisma.fichier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fichierWithIdOnly = await prisma.fichier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FichierFindManyArgs>(args?: SelectSubset<T, FichierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fichier.
     * @param {FichierCreateArgs} args - Arguments to create a Fichier.
     * @example
     * // Create one Fichier
     * const Fichier = await prisma.fichier.create({
     *   data: {
     *     // ... data to create a Fichier
     *   }
     * })
     * 
     */
    create<T extends FichierCreateArgs>(args: SelectSubset<T, FichierCreateArgs<ExtArgs>>): Prisma__FichierClient<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fichiers.
     * @param {FichierCreateManyArgs} args - Arguments to create many Fichiers.
     * @example
     * // Create many Fichiers
     * const fichier = await prisma.fichier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FichierCreateManyArgs>(args?: SelectSubset<T, FichierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fichiers and returns the data saved in the database.
     * @param {FichierCreateManyAndReturnArgs} args - Arguments to create many Fichiers.
     * @example
     * // Create many Fichiers
     * const fichier = await prisma.fichier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fichiers and only return the `id`
     * const fichierWithIdOnly = await prisma.fichier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FichierCreateManyAndReturnArgs>(args?: SelectSubset<T, FichierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fichier.
     * @param {FichierDeleteArgs} args - Arguments to delete one Fichier.
     * @example
     * // Delete one Fichier
     * const Fichier = await prisma.fichier.delete({
     *   where: {
     *     // ... filter to delete one Fichier
     *   }
     * })
     * 
     */
    delete<T extends FichierDeleteArgs>(args: SelectSubset<T, FichierDeleteArgs<ExtArgs>>): Prisma__FichierClient<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fichier.
     * @param {FichierUpdateArgs} args - Arguments to update one Fichier.
     * @example
     * // Update one Fichier
     * const fichier = await prisma.fichier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FichierUpdateArgs>(args: SelectSubset<T, FichierUpdateArgs<ExtArgs>>): Prisma__FichierClient<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fichiers.
     * @param {FichierDeleteManyArgs} args - Arguments to filter Fichiers to delete.
     * @example
     * // Delete a few Fichiers
     * const { count } = await prisma.fichier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FichierDeleteManyArgs>(args?: SelectSubset<T, FichierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fichiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fichiers
     * const fichier = await prisma.fichier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FichierUpdateManyArgs>(args: SelectSubset<T, FichierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fichiers and returns the data updated in the database.
     * @param {FichierUpdateManyAndReturnArgs} args - Arguments to update many Fichiers.
     * @example
     * // Update many Fichiers
     * const fichier = await prisma.fichier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fichiers and only return the `id`
     * const fichierWithIdOnly = await prisma.fichier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FichierUpdateManyAndReturnArgs>(args: SelectSubset<T, FichierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fichier.
     * @param {FichierUpsertArgs} args - Arguments to update or create a Fichier.
     * @example
     * // Update or create a Fichier
     * const fichier = await prisma.fichier.upsert({
     *   create: {
     *     // ... data to create a Fichier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fichier we want to update
     *   }
     * })
     */
    upsert<T extends FichierUpsertArgs>(args: SelectSubset<T, FichierUpsertArgs<ExtArgs>>): Prisma__FichierClient<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fichiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichierCountArgs} args - Arguments to filter Fichiers to count.
     * @example
     * // Count the number of Fichiers
     * const count = await prisma.fichier.count({
     *   where: {
     *     // ... the filter for the Fichiers we want to count
     *   }
     * })
    **/
    count<T extends FichierCountArgs>(
      args?: Subset<T, FichierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FichierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fichier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FichierAggregateArgs>(args: Subset<T, FichierAggregateArgs>): Prisma.PrismaPromise<GetFichierAggregateType<T>>

    /**
     * Group by Fichier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FichierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FichierGroupByArgs['orderBy'] }
        : { orderBy?: FichierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FichierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFichierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fichier model
   */
  readonly fields: FichierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fichier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FichierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends Fichier$articlesArgs<ExtArgs> = {}>(args?: Subset<T, Fichier$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categoriesActivites<T extends Fichier$categoriesActivitesArgs<ExtArgs> = {}>(args?: Subset<T, Fichier$categoriesActivitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategorieActivitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profils<T extends Fichier$profilsArgs<ExtArgs> = {}>(args?: Subset<T, Fichier$profilsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fichier model
   */
  interface FichierFieldRefs {
    readonly id: FieldRef<"Fichier", 'Int'>
    readonly nom: FieldRef<"Fichier", 'String'>
    readonly url: FieldRef<"Fichier", 'String'>
    readonly type: FieldRef<"Fichier", 'FileTypes'>
    readonly mime: FieldRef<"Fichier", 'String'>
    readonly taille: FieldRef<"Fichier", 'String'>
    readonly dateCreation: FieldRef<"Fichier", 'DateTime'>
    readonly dateMaj: FieldRef<"Fichier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fichier findUnique
   */
  export type FichierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    /**
     * Filter, which Fichier to fetch.
     */
    where: FichierWhereUniqueInput
  }

  /**
   * Fichier findUniqueOrThrow
   */
  export type FichierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    /**
     * Filter, which Fichier to fetch.
     */
    where: FichierWhereUniqueInput
  }

  /**
   * Fichier findFirst
   */
  export type FichierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    /**
     * Filter, which Fichier to fetch.
     */
    where?: FichierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fichiers to fetch.
     */
    orderBy?: FichierOrderByWithRelationInput | FichierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fichiers.
     */
    cursor?: FichierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fichiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fichiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fichiers.
     */
    distinct?: FichierScalarFieldEnum | FichierScalarFieldEnum[]
  }

  /**
   * Fichier findFirstOrThrow
   */
  export type FichierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    /**
     * Filter, which Fichier to fetch.
     */
    where?: FichierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fichiers to fetch.
     */
    orderBy?: FichierOrderByWithRelationInput | FichierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fichiers.
     */
    cursor?: FichierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fichiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fichiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fichiers.
     */
    distinct?: FichierScalarFieldEnum | FichierScalarFieldEnum[]
  }

  /**
   * Fichier findMany
   */
  export type FichierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    /**
     * Filter, which Fichiers to fetch.
     */
    where?: FichierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fichiers to fetch.
     */
    orderBy?: FichierOrderByWithRelationInput | FichierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fichiers.
     */
    cursor?: FichierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fichiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fichiers.
     */
    skip?: number
    distinct?: FichierScalarFieldEnum | FichierScalarFieldEnum[]
  }

  /**
   * Fichier create
   */
  export type FichierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    /**
     * The data needed to create a Fichier.
     */
    data: XOR<FichierCreateInput, FichierUncheckedCreateInput>
  }

  /**
   * Fichier createMany
   */
  export type FichierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fichiers.
     */
    data: FichierCreateManyInput | FichierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fichier createManyAndReturn
   */
  export type FichierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * The data used to create many Fichiers.
     */
    data: FichierCreateManyInput | FichierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fichier update
   */
  export type FichierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    /**
     * The data needed to update a Fichier.
     */
    data: XOR<FichierUpdateInput, FichierUncheckedUpdateInput>
    /**
     * Choose, which Fichier to update.
     */
    where: FichierWhereUniqueInput
  }

  /**
   * Fichier updateMany
   */
  export type FichierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fichiers.
     */
    data: XOR<FichierUpdateManyMutationInput, FichierUncheckedUpdateManyInput>
    /**
     * Filter which Fichiers to update
     */
    where?: FichierWhereInput
    /**
     * Limit how many Fichiers to update.
     */
    limit?: number
  }

  /**
   * Fichier updateManyAndReturn
   */
  export type FichierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * The data used to update Fichiers.
     */
    data: XOR<FichierUpdateManyMutationInput, FichierUncheckedUpdateManyInput>
    /**
     * Filter which Fichiers to update
     */
    where?: FichierWhereInput
    /**
     * Limit how many Fichiers to update.
     */
    limit?: number
  }

  /**
   * Fichier upsert
   */
  export type FichierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    /**
     * The filter to search for the Fichier to update in case it exists.
     */
    where: FichierWhereUniqueInput
    /**
     * In case the Fichier found by the `where` argument doesn't exist, create a new Fichier with this data.
     */
    create: XOR<FichierCreateInput, FichierUncheckedCreateInput>
    /**
     * In case the Fichier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FichierUpdateInput, FichierUncheckedUpdateInput>
  }

  /**
   * Fichier delete
   */
  export type FichierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    /**
     * Filter which Fichier to delete.
     */
    where: FichierWhereUniqueInput
  }

  /**
   * Fichier deleteMany
   */
  export type FichierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fichiers to delete
     */
    where?: FichierWhereInput
    /**
     * Limit how many Fichiers to delete.
     */
    limit?: number
  }

  /**
   * Fichier.articles
   */
  export type Fichier$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Fichier.categoriesActivites
   */
  export type Fichier$categoriesActivitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieActivite
     */
    select?: CategorieActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieActivite
     */
    omit?: CategorieActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieActiviteInclude<ExtArgs> | null
    where?: CategorieActiviteWhereInput
    orderBy?: CategorieActiviteOrderByWithRelationInput | CategorieActiviteOrderByWithRelationInput[]
    cursor?: CategorieActiviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategorieActiviteScalarFieldEnum | CategorieActiviteScalarFieldEnum[]
  }

  /**
   * Fichier.profils
   */
  export type Fichier$profilsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    where?: ProfilWhereInput
    orderBy?: ProfilOrderByWithRelationInput | ProfilOrderByWithRelationInput[]
    cursor?: ProfilWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfilScalarFieldEnum | ProfilScalarFieldEnum[]
  }

  /**
   * Fichier without action
   */
  export type FichierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
  }


  /**
   * Model Membre
   */

  export type AggregateMembre = {
    _count: MembreCountAggregateOutputType | null
    _avg: MembreAvgAggregateOutputType | null
    _sum: MembreSumAggregateOutputType | null
    _min: MembreMinAggregateOutputType | null
    _max: MembreMaxAggregateOutputType | null
  }

  export type MembreAvgAggregateOutputType = {
    id: number | null
  }

  export type MembreSumAggregateOutputType = {
    id: number | null
  }

  export type MembreMinAggregateOutputType = {
    id: number | null
    email: string | null
    mot_de_passe: string | null
    est_supprime: boolean | null
    role: $Enums.RoleTypes | null
  }

  export type MembreMaxAggregateOutputType = {
    id: number | null
    email: string | null
    mot_de_passe: string | null
    est_supprime: boolean | null
    role: $Enums.RoleTypes | null
  }

  export type MembreCountAggregateOutputType = {
    id: number
    email: number
    mot_de_passe: number
    est_supprime: number
    role: number
    _all: number
  }


  export type MembreAvgAggregateInputType = {
    id?: true
  }

  export type MembreSumAggregateInputType = {
    id?: true
  }

  export type MembreMinAggregateInputType = {
    id?: true
    email?: true
    mot_de_passe?: true
    est_supprime?: true
    role?: true
  }

  export type MembreMaxAggregateInputType = {
    id?: true
    email?: true
    mot_de_passe?: true
    est_supprime?: true
    role?: true
  }

  export type MembreCountAggregateInputType = {
    id?: true
    email?: true
    mot_de_passe?: true
    est_supprime?: true
    role?: true
    _all?: true
  }

  export type MembreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Membre to aggregate.
     */
    where?: MembreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Membres to fetch.
     */
    orderBy?: MembreOrderByWithRelationInput | MembreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Membres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Membres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Membres
    **/
    _count?: true | MembreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembreMaxAggregateInputType
  }

  export type GetMembreAggregateType<T extends MembreAggregateArgs> = {
        [P in keyof T & keyof AggregateMembre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembre[P]>
      : GetScalarType<T[P], AggregateMembre[P]>
  }




  export type MembreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembreWhereInput
    orderBy?: MembreOrderByWithAggregationInput | MembreOrderByWithAggregationInput[]
    by: MembreScalarFieldEnum[] | MembreScalarFieldEnum
    having?: MembreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembreCountAggregateInputType | true
    _avg?: MembreAvgAggregateInputType
    _sum?: MembreSumAggregateInputType
    _min?: MembreMinAggregateInputType
    _max?: MembreMaxAggregateInputType
  }

  export type MembreGroupByOutputType = {
    id: number
    email: string
    mot_de_passe: string
    est_supprime: boolean
    role: $Enums.RoleTypes
    _count: MembreCountAggregateOutputType | null
    _avg: MembreAvgAggregateOutputType | null
    _sum: MembreSumAggregateOutputType | null
    _min: MembreMinAggregateOutputType | null
    _max: MembreMaxAggregateOutputType | null
  }

  type GetMembreGroupByPayload<T extends MembreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembreGroupByOutputType[P]>
            : GetScalarType<T[P], MembreGroupByOutputType[P]>
        }
      >
    >


  export type MembreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    mot_de_passe?: boolean
    est_supprime?: boolean
    role?: boolean
    inscriptions?: boolean | Membre$inscriptionsArgs<ExtArgs>
    profil?: boolean | Membre$profilArgs<ExtArgs>
    articles?: boolean | Membre$articlesArgs<ExtArgs>
    _count?: boolean | MembreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membre"]>

  export type MembreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    mot_de_passe?: boolean
    est_supprime?: boolean
    role?: boolean
  }, ExtArgs["result"]["membre"]>

  export type MembreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    mot_de_passe?: boolean
    est_supprime?: boolean
    role?: boolean
  }, ExtArgs["result"]["membre"]>

  export type MembreSelectScalar = {
    id?: boolean
    email?: boolean
    mot_de_passe?: boolean
    est_supprime?: boolean
    role?: boolean
  }

  export type MembreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "mot_de_passe" | "est_supprime" | "role", ExtArgs["result"]["membre"]>
  export type MembreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscriptions?: boolean | Membre$inscriptionsArgs<ExtArgs>
    profil?: boolean | Membre$profilArgs<ExtArgs>
    articles?: boolean | Membre$articlesArgs<ExtArgs>
    _count?: boolean | MembreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MembreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MembreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MembrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Membre"
    objects: {
      inscriptions: Prisma.$MembreActivitePayload<ExtArgs>[]
      profil: Prisma.$ProfilPayload<ExtArgs> | null
      articles: Prisma.$ArticlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      mot_de_passe: string
      est_supprime: boolean
      role: $Enums.RoleTypes
    }, ExtArgs["result"]["membre"]>
    composites: {}
  }

  type MembreGetPayload<S extends boolean | null | undefined | MembreDefaultArgs> = $Result.GetResult<Prisma.$MembrePayload, S>

  type MembreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembreCountAggregateInputType | true
    }

  export interface MembreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Membre'], meta: { name: 'Membre' } }
    /**
     * Find zero or one Membre that matches the filter.
     * @param {MembreFindUniqueArgs} args - Arguments to find a Membre
     * @example
     * // Get one Membre
     * const membre = await prisma.membre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembreFindUniqueArgs>(args: SelectSubset<T, MembreFindUniqueArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Membre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembreFindUniqueOrThrowArgs} args - Arguments to find a Membre
     * @example
     * // Get one Membre
     * const membre = await prisma.membre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembreFindUniqueOrThrowArgs>(args: SelectSubset<T, MembreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Membre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreFindFirstArgs} args - Arguments to find a Membre
     * @example
     * // Get one Membre
     * const membre = await prisma.membre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembreFindFirstArgs>(args?: SelectSubset<T, MembreFindFirstArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Membre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreFindFirstOrThrowArgs} args - Arguments to find a Membre
     * @example
     * // Get one Membre
     * const membre = await prisma.membre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembreFindFirstOrThrowArgs>(args?: SelectSubset<T, MembreFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Membres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Membres
     * const membres = await prisma.membre.findMany()
     * 
     * // Get first 10 Membres
     * const membres = await prisma.membre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membreWithIdOnly = await prisma.membre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembreFindManyArgs>(args?: SelectSubset<T, MembreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Membre.
     * @param {MembreCreateArgs} args - Arguments to create a Membre.
     * @example
     * // Create one Membre
     * const Membre = await prisma.membre.create({
     *   data: {
     *     // ... data to create a Membre
     *   }
     * })
     * 
     */
    create<T extends MembreCreateArgs>(args: SelectSubset<T, MembreCreateArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Membres.
     * @param {MembreCreateManyArgs} args - Arguments to create many Membres.
     * @example
     * // Create many Membres
     * const membre = await prisma.membre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembreCreateManyArgs>(args?: SelectSubset<T, MembreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Membres and returns the data saved in the database.
     * @param {MembreCreateManyAndReturnArgs} args - Arguments to create many Membres.
     * @example
     * // Create many Membres
     * const membre = await prisma.membre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Membres and only return the `id`
     * const membreWithIdOnly = await prisma.membre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembreCreateManyAndReturnArgs>(args?: SelectSubset<T, MembreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Membre.
     * @param {MembreDeleteArgs} args - Arguments to delete one Membre.
     * @example
     * // Delete one Membre
     * const Membre = await prisma.membre.delete({
     *   where: {
     *     // ... filter to delete one Membre
     *   }
     * })
     * 
     */
    delete<T extends MembreDeleteArgs>(args: SelectSubset<T, MembreDeleteArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Membre.
     * @param {MembreUpdateArgs} args - Arguments to update one Membre.
     * @example
     * // Update one Membre
     * const membre = await prisma.membre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembreUpdateArgs>(args: SelectSubset<T, MembreUpdateArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Membres.
     * @param {MembreDeleteManyArgs} args - Arguments to filter Membres to delete.
     * @example
     * // Delete a few Membres
     * const { count } = await prisma.membre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembreDeleteManyArgs>(args?: SelectSubset<T, MembreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Membres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Membres
     * const membre = await prisma.membre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembreUpdateManyArgs>(args: SelectSubset<T, MembreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Membres and returns the data updated in the database.
     * @param {MembreUpdateManyAndReturnArgs} args - Arguments to update many Membres.
     * @example
     * // Update many Membres
     * const membre = await prisma.membre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Membres and only return the `id`
     * const membreWithIdOnly = await prisma.membre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MembreUpdateManyAndReturnArgs>(args: SelectSubset<T, MembreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Membre.
     * @param {MembreUpsertArgs} args - Arguments to update or create a Membre.
     * @example
     * // Update or create a Membre
     * const membre = await prisma.membre.upsert({
     *   create: {
     *     // ... data to create a Membre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Membre we want to update
     *   }
     * })
     */
    upsert<T extends MembreUpsertArgs>(args: SelectSubset<T, MembreUpsertArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Membres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreCountArgs} args - Arguments to filter Membres to count.
     * @example
     * // Count the number of Membres
     * const count = await prisma.membre.count({
     *   where: {
     *     // ... the filter for the Membres we want to count
     *   }
     * })
    **/
    count<T extends MembreCountArgs>(
      args?: Subset<T, MembreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Membre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MembreAggregateArgs>(args: Subset<T, MembreAggregateArgs>): Prisma.PrismaPromise<GetMembreAggregateType<T>>

    /**
     * Group by Membre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MembreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembreGroupByArgs['orderBy'] }
        : { orderBy?: MembreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MembreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Membre model
   */
  readonly fields: MembreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Membre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inscriptions<T extends Membre$inscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Membre$inscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembreActivitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profil<T extends Membre$profilArgs<ExtArgs> = {}>(args?: Subset<T, Membre$profilArgs<ExtArgs>>): Prisma__ProfilClient<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    articles<T extends Membre$articlesArgs<ExtArgs> = {}>(args?: Subset<T, Membre$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Membre model
   */
  interface MembreFieldRefs {
    readonly id: FieldRef<"Membre", 'Int'>
    readonly email: FieldRef<"Membre", 'String'>
    readonly mot_de_passe: FieldRef<"Membre", 'String'>
    readonly est_supprime: FieldRef<"Membre", 'Boolean'>
    readonly role: FieldRef<"Membre", 'RoleTypes'>
  }
    

  // Custom InputTypes
  /**
   * Membre findUnique
   */
  export type MembreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * Filter, which Membre to fetch.
     */
    where: MembreWhereUniqueInput
  }

  /**
   * Membre findUniqueOrThrow
   */
  export type MembreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * Filter, which Membre to fetch.
     */
    where: MembreWhereUniqueInput
  }

  /**
   * Membre findFirst
   */
  export type MembreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * Filter, which Membre to fetch.
     */
    where?: MembreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Membres to fetch.
     */
    orderBy?: MembreOrderByWithRelationInput | MembreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Membres.
     */
    cursor?: MembreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Membres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Membres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Membres.
     */
    distinct?: MembreScalarFieldEnum | MembreScalarFieldEnum[]
  }

  /**
   * Membre findFirstOrThrow
   */
  export type MembreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * Filter, which Membre to fetch.
     */
    where?: MembreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Membres to fetch.
     */
    orderBy?: MembreOrderByWithRelationInput | MembreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Membres.
     */
    cursor?: MembreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Membres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Membres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Membres.
     */
    distinct?: MembreScalarFieldEnum | MembreScalarFieldEnum[]
  }

  /**
   * Membre findMany
   */
  export type MembreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * Filter, which Membres to fetch.
     */
    where?: MembreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Membres to fetch.
     */
    orderBy?: MembreOrderByWithRelationInput | MembreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Membres.
     */
    cursor?: MembreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Membres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Membres.
     */
    skip?: number
    distinct?: MembreScalarFieldEnum | MembreScalarFieldEnum[]
  }

  /**
   * Membre create
   */
  export type MembreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * The data needed to create a Membre.
     */
    data: XOR<MembreCreateInput, MembreUncheckedCreateInput>
  }

  /**
   * Membre createMany
   */
  export type MembreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Membres.
     */
    data: MembreCreateManyInput | MembreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Membre createManyAndReturn
   */
  export type MembreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * The data used to create many Membres.
     */
    data: MembreCreateManyInput | MembreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Membre update
   */
  export type MembreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * The data needed to update a Membre.
     */
    data: XOR<MembreUpdateInput, MembreUncheckedUpdateInput>
    /**
     * Choose, which Membre to update.
     */
    where: MembreWhereUniqueInput
  }

  /**
   * Membre updateMany
   */
  export type MembreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Membres.
     */
    data: XOR<MembreUpdateManyMutationInput, MembreUncheckedUpdateManyInput>
    /**
     * Filter which Membres to update
     */
    where?: MembreWhereInput
    /**
     * Limit how many Membres to update.
     */
    limit?: number
  }

  /**
   * Membre updateManyAndReturn
   */
  export type MembreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * The data used to update Membres.
     */
    data: XOR<MembreUpdateManyMutationInput, MembreUncheckedUpdateManyInput>
    /**
     * Filter which Membres to update
     */
    where?: MembreWhereInput
    /**
     * Limit how many Membres to update.
     */
    limit?: number
  }

  /**
   * Membre upsert
   */
  export type MembreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * The filter to search for the Membre to update in case it exists.
     */
    where: MembreWhereUniqueInput
    /**
     * In case the Membre found by the `where` argument doesn't exist, create a new Membre with this data.
     */
    create: XOR<MembreCreateInput, MembreUncheckedCreateInput>
    /**
     * In case the Membre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembreUpdateInput, MembreUncheckedUpdateInput>
  }

  /**
   * Membre delete
   */
  export type MembreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * Filter which Membre to delete.
     */
    where: MembreWhereUniqueInput
  }

  /**
   * Membre deleteMany
   */
  export type MembreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Membres to delete
     */
    where?: MembreWhereInput
    /**
     * Limit how many Membres to delete.
     */
    limit?: number
  }

  /**
   * Membre.inscriptions
   */
  export type Membre$inscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreActivite
     */
    select?: MembreActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreActivite
     */
    omit?: MembreActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreActiviteInclude<ExtArgs> | null
    where?: MembreActiviteWhereInput
    orderBy?: MembreActiviteOrderByWithRelationInput | MembreActiviteOrderByWithRelationInput[]
    cursor?: MembreActiviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembreActiviteScalarFieldEnum | MembreActiviteScalarFieldEnum[]
  }

  /**
   * Membre.profil
   */
  export type Membre$profilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    where?: ProfilWhereInput
  }

  /**
   * Membre.articles
   */
  export type Membre$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Membre without action
   */
  export type MembreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
  }


  /**
   * Model Profil
   */

  export type AggregateProfil = {
    _count: ProfilCountAggregateOutputType | null
    _avg: ProfilAvgAggregateOutputType | null
    _sum: ProfilSumAggregateOutputType | null
    _min: ProfilMinAggregateOutputType | null
    _max: ProfilMaxAggregateOutputType | null
  }

  export type ProfilAvgAggregateOutputType = {
    id: number | null
    avatarId: number | null
    membreId: number | null
  }

  export type ProfilSumAggregateOutputType = {
    id: number | null
    avatarId: number | null
    membreId: number | null
  }

  export type ProfilMinAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    telephone: string | null
    communication_mail: boolean | null
    communication_sms: boolean | null
    avatarId: number | null
    membreId: number | null
  }

  export type ProfilMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    telephone: string | null
    communication_mail: boolean | null
    communication_sms: boolean | null
    avatarId: number | null
    membreId: number | null
  }

  export type ProfilCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    telephone: number
    communication_mail: number
    communication_sms: number
    avatarId: number
    membreId: number
    _all: number
  }


  export type ProfilAvgAggregateInputType = {
    id?: true
    avatarId?: true
    membreId?: true
  }

  export type ProfilSumAggregateInputType = {
    id?: true
    avatarId?: true
    membreId?: true
  }

  export type ProfilMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    telephone?: true
    communication_mail?: true
    communication_sms?: true
    avatarId?: true
    membreId?: true
  }

  export type ProfilMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    telephone?: true
    communication_mail?: true
    communication_sms?: true
    avatarId?: true
    membreId?: true
  }

  export type ProfilCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    telephone?: true
    communication_mail?: true
    communication_sms?: true
    avatarId?: true
    membreId?: true
    _all?: true
  }

  export type ProfilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profil to aggregate.
     */
    where?: ProfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profils to fetch.
     */
    orderBy?: ProfilOrderByWithRelationInput | ProfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profils
    **/
    _count?: true | ProfilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilMaxAggregateInputType
  }

  export type GetProfilAggregateType<T extends ProfilAggregateArgs> = {
        [P in keyof T & keyof AggregateProfil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfil[P]>
      : GetScalarType<T[P], AggregateProfil[P]>
  }




  export type ProfilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfilWhereInput
    orderBy?: ProfilOrderByWithAggregationInput | ProfilOrderByWithAggregationInput[]
    by: ProfilScalarFieldEnum[] | ProfilScalarFieldEnum
    having?: ProfilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilCountAggregateInputType | true
    _avg?: ProfilAvgAggregateInputType
    _sum?: ProfilSumAggregateInputType
    _min?: ProfilMinAggregateInputType
    _max?: ProfilMaxAggregateInputType
  }

  export type ProfilGroupByOutputType = {
    id: number
    nom: string
    prenom: string
    telephone: string | null
    communication_mail: boolean
    communication_sms: boolean
    avatarId: number | null
    membreId: number
    _count: ProfilCountAggregateOutputType | null
    _avg: ProfilAvgAggregateOutputType | null
    _sum: ProfilSumAggregateOutputType | null
    _min: ProfilMinAggregateOutputType | null
    _max: ProfilMaxAggregateOutputType | null
  }

  type GetProfilGroupByPayload<T extends ProfilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilGroupByOutputType[P]>
        }
      >
    >


  export type ProfilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    communication_mail?: boolean
    communication_sms?: boolean
    avatarId?: boolean
    membreId?: boolean
    avatar?: boolean | Profil$avatarArgs<ExtArgs>
    membre?: boolean | MembreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profil"]>

  export type ProfilSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    communication_mail?: boolean
    communication_sms?: boolean
    avatarId?: boolean
    membreId?: boolean
    avatar?: boolean | Profil$avatarArgs<ExtArgs>
    membre?: boolean | MembreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profil"]>

  export type ProfilSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    communication_mail?: boolean
    communication_sms?: boolean
    avatarId?: boolean
    membreId?: boolean
    avatar?: boolean | Profil$avatarArgs<ExtArgs>
    membre?: boolean | MembreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profil"]>

  export type ProfilSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    communication_mail?: boolean
    communication_sms?: boolean
    avatarId?: boolean
    membreId?: boolean
  }

  export type ProfilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "telephone" | "communication_mail" | "communication_sms" | "avatarId" | "membreId", ExtArgs["result"]["profil"]>
  export type ProfilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avatar?: boolean | Profil$avatarArgs<ExtArgs>
    membre?: boolean | MembreDefaultArgs<ExtArgs>
  }
  export type ProfilIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avatar?: boolean | Profil$avatarArgs<ExtArgs>
    membre?: boolean | MembreDefaultArgs<ExtArgs>
  }
  export type ProfilIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avatar?: boolean | Profil$avatarArgs<ExtArgs>
    membre?: boolean | MembreDefaultArgs<ExtArgs>
  }

  export type $ProfilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profil"
    objects: {
      avatar: Prisma.$FichierPayload<ExtArgs> | null
      membre: Prisma.$MembrePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      prenom: string
      telephone: string | null
      communication_mail: boolean
      communication_sms: boolean
      avatarId: number | null
      membreId: number
    }, ExtArgs["result"]["profil"]>
    composites: {}
  }

  type ProfilGetPayload<S extends boolean | null | undefined | ProfilDefaultArgs> = $Result.GetResult<Prisma.$ProfilPayload, S>

  type ProfilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilCountAggregateInputType | true
    }

  export interface ProfilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profil'], meta: { name: 'Profil' } }
    /**
     * Find zero or one Profil that matches the filter.
     * @param {ProfilFindUniqueArgs} args - Arguments to find a Profil
     * @example
     * // Get one Profil
     * const profil = await prisma.profil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfilFindUniqueArgs>(args: SelectSubset<T, ProfilFindUniqueArgs<ExtArgs>>): Prisma__ProfilClient<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfilFindUniqueOrThrowArgs} args - Arguments to find a Profil
     * @example
     * // Get one Profil
     * const profil = await prisma.profil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfilFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfilClient<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilFindFirstArgs} args - Arguments to find a Profil
     * @example
     * // Get one Profil
     * const profil = await prisma.profil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfilFindFirstArgs>(args?: SelectSubset<T, ProfilFindFirstArgs<ExtArgs>>): Prisma__ProfilClient<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilFindFirstOrThrowArgs} args - Arguments to find a Profil
     * @example
     * // Get one Profil
     * const profil = await prisma.profil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfilFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfilFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfilClient<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profils
     * const profils = await prisma.profil.findMany()
     * 
     * // Get first 10 Profils
     * const profils = await prisma.profil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilWithIdOnly = await prisma.profil.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfilFindManyArgs>(args?: SelectSubset<T, ProfilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profil.
     * @param {ProfilCreateArgs} args - Arguments to create a Profil.
     * @example
     * // Create one Profil
     * const Profil = await prisma.profil.create({
     *   data: {
     *     // ... data to create a Profil
     *   }
     * })
     * 
     */
    create<T extends ProfilCreateArgs>(args: SelectSubset<T, ProfilCreateArgs<ExtArgs>>): Prisma__ProfilClient<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profils.
     * @param {ProfilCreateManyArgs} args - Arguments to create many Profils.
     * @example
     * // Create many Profils
     * const profil = await prisma.profil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfilCreateManyArgs>(args?: SelectSubset<T, ProfilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profils and returns the data saved in the database.
     * @param {ProfilCreateManyAndReturnArgs} args - Arguments to create many Profils.
     * @example
     * // Create many Profils
     * const profil = await prisma.profil.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profils and only return the `id`
     * const profilWithIdOnly = await prisma.profil.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfilCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfilCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profil.
     * @param {ProfilDeleteArgs} args - Arguments to delete one Profil.
     * @example
     * // Delete one Profil
     * const Profil = await prisma.profil.delete({
     *   where: {
     *     // ... filter to delete one Profil
     *   }
     * })
     * 
     */
    delete<T extends ProfilDeleteArgs>(args: SelectSubset<T, ProfilDeleteArgs<ExtArgs>>): Prisma__ProfilClient<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profil.
     * @param {ProfilUpdateArgs} args - Arguments to update one Profil.
     * @example
     * // Update one Profil
     * const profil = await prisma.profil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfilUpdateArgs>(args: SelectSubset<T, ProfilUpdateArgs<ExtArgs>>): Prisma__ProfilClient<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profils.
     * @param {ProfilDeleteManyArgs} args - Arguments to filter Profils to delete.
     * @example
     * // Delete a few Profils
     * const { count } = await prisma.profil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfilDeleteManyArgs>(args?: SelectSubset<T, ProfilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profils
     * const profil = await prisma.profil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfilUpdateManyArgs>(args: SelectSubset<T, ProfilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profils and returns the data updated in the database.
     * @param {ProfilUpdateManyAndReturnArgs} args - Arguments to update many Profils.
     * @example
     * // Update many Profils
     * const profil = await prisma.profil.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profils and only return the `id`
     * const profilWithIdOnly = await prisma.profil.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfilUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfilUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profil.
     * @param {ProfilUpsertArgs} args - Arguments to update or create a Profil.
     * @example
     * // Update or create a Profil
     * const profil = await prisma.profil.upsert({
     *   create: {
     *     // ... data to create a Profil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profil we want to update
     *   }
     * })
     */
    upsert<T extends ProfilUpsertArgs>(args: SelectSubset<T, ProfilUpsertArgs<ExtArgs>>): Prisma__ProfilClient<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilCountArgs} args - Arguments to filter Profils to count.
     * @example
     * // Count the number of Profils
     * const count = await prisma.profil.count({
     *   where: {
     *     // ... the filter for the Profils we want to count
     *   }
     * })
    **/
    count<T extends ProfilCountArgs>(
      args?: Subset<T, ProfilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfilAggregateArgs>(args: Subset<T, ProfilAggregateArgs>): Prisma.PrismaPromise<GetProfilAggregateType<T>>

    /**
     * Group by Profil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfilGroupByArgs['orderBy'] }
        : { orderBy?: ProfilGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profil model
   */
  readonly fields: ProfilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avatar<T extends Profil$avatarArgs<ExtArgs> = {}>(args?: Subset<T, Profil$avatarArgs<ExtArgs>>): Prisma__FichierClient<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    membre<T extends MembreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MembreDefaultArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profil model
   */
  interface ProfilFieldRefs {
    readonly id: FieldRef<"Profil", 'Int'>
    readonly nom: FieldRef<"Profil", 'String'>
    readonly prenom: FieldRef<"Profil", 'String'>
    readonly telephone: FieldRef<"Profil", 'String'>
    readonly communication_mail: FieldRef<"Profil", 'Boolean'>
    readonly communication_sms: FieldRef<"Profil", 'Boolean'>
    readonly avatarId: FieldRef<"Profil", 'Int'>
    readonly membreId: FieldRef<"Profil", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Profil findUnique
   */
  export type ProfilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    /**
     * Filter, which Profil to fetch.
     */
    where: ProfilWhereUniqueInput
  }

  /**
   * Profil findUniqueOrThrow
   */
  export type ProfilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    /**
     * Filter, which Profil to fetch.
     */
    where: ProfilWhereUniqueInput
  }

  /**
   * Profil findFirst
   */
  export type ProfilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    /**
     * Filter, which Profil to fetch.
     */
    where?: ProfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profils to fetch.
     */
    orderBy?: ProfilOrderByWithRelationInput | ProfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profils.
     */
    cursor?: ProfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profils.
     */
    distinct?: ProfilScalarFieldEnum | ProfilScalarFieldEnum[]
  }

  /**
   * Profil findFirstOrThrow
   */
  export type ProfilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    /**
     * Filter, which Profil to fetch.
     */
    where?: ProfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profils to fetch.
     */
    orderBy?: ProfilOrderByWithRelationInput | ProfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profils.
     */
    cursor?: ProfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profils.
     */
    distinct?: ProfilScalarFieldEnum | ProfilScalarFieldEnum[]
  }

  /**
   * Profil findMany
   */
  export type ProfilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    /**
     * Filter, which Profils to fetch.
     */
    where?: ProfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profils to fetch.
     */
    orderBy?: ProfilOrderByWithRelationInput | ProfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profils.
     */
    cursor?: ProfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profils.
     */
    skip?: number
    distinct?: ProfilScalarFieldEnum | ProfilScalarFieldEnum[]
  }

  /**
   * Profil create
   */
  export type ProfilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    /**
     * The data needed to create a Profil.
     */
    data: XOR<ProfilCreateInput, ProfilUncheckedCreateInput>
  }

  /**
   * Profil createMany
   */
  export type ProfilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profils.
     */
    data: ProfilCreateManyInput | ProfilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profil createManyAndReturn
   */
  export type ProfilCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * The data used to create many Profils.
     */
    data: ProfilCreateManyInput | ProfilCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profil update
   */
  export type ProfilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    /**
     * The data needed to update a Profil.
     */
    data: XOR<ProfilUpdateInput, ProfilUncheckedUpdateInput>
    /**
     * Choose, which Profil to update.
     */
    where: ProfilWhereUniqueInput
  }

  /**
   * Profil updateMany
   */
  export type ProfilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profils.
     */
    data: XOR<ProfilUpdateManyMutationInput, ProfilUncheckedUpdateManyInput>
    /**
     * Filter which Profils to update
     */
    where?: ProfilWhereInput
    /**
     * Limit how many Profils to update.
     */
    limit?: number
  }

  /**
   * Profil updateManyAndReturn
   */
  export type ProfilUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * The data used to update Profils.
     */
    data: XOR<ProfilUpdateManyMutationInput, ProfilUncheckedUpdateManyInput>
    /**
     * Filter which Profils to update
     */
    where?: ProfilWhereInput
    /**
     * Limit how many Profils to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profil upsert
   */
  export type ProfilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    /**
     * The filter to search for the Profil to update in case it exists.
     */
    where: ProfilWhereUniqueInput
    /**
     * In case the Profil found by the `where` argument doesn't exist, create a new Profil with this data.
     */
    create: XOR<ProfilCreateInput, ProfilUncheckedCreateInput>
    /**
     * In case the Profil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfilUpdateInput, ProfilUncheckedUpdateInput>
  }

  /**
   * Profil delete
   */
  export type ProfilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    /**
     * Filter which Profil to delete.
     */
    where: ProfilWhereUniqueInput
  }

  /**
   * Profil deleteMany
   */
  export type ProfilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profils to delete
     */
    where?: ProfilWhereInput
    /**
     * Limit how many Profils to delete.
     */
    limit?: number
  }

  /**
   * Profil.avatar
   */
  export type Profil$avatarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    where?: FichierWhereInput
  }

  /**
   * Profil without action
   */
  export type ProfilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
  }


  /**
   * Model CategorieActivite
   */

  export type AggregateCategorieActivite = {
    _count: CategorieActiviteCountAggregateOutputType | null
    _avg: CategorieActiviteAvgAggregateOutputType | null
    _sum: CategorieActiviteSumAggregateOutputType | null
    _min: CategorieActiviteMinAggregateOutputType | null
    _max: CategorieActiviteMaxAggregateOutputType | null
  }

  export type CategorieActiviteAvgAggregateOutputType = {
    id: number | null
    imageId: number | null
  }

  export type CategorieActiviteSumAggregateOutputType = {
    id: number | null
    imageId: number | null
  }

  export type CategorieActiviteMinAggregateOutputType = {
    id: number | null
    lbl_categorie: string | null
    avec_equipement: boolean | null
    couleur: string | null
    avec_notification: boolean | null
    is_supprime: boolean | null
    imageId: number | null
  }

  export type CategorieActiviteMaxAggregateOutputType = {
    id: number | null
    lbl_categorie: string | null
    avec_equipement: boolean | null
    couleur: string | null
    avec_notification: boolean | null
    is_supprime: boolean | null
    imageId: number | null
  }

  export type CategorieActiviteCountAggregateOutputType = {
    id: number
    lbl_categorie: number
    avec_equipement: number
    couleur: number
    avec_notification: number
    is_supprime: number
    imageId: number
    _all: number
  }


  export type CategorieActiviteAvgAggregateInputType = {
    id?: true
    imageId?: true
  }

  export type CategorieActiviteSumAggregateInputType = {
    id?: true
    imageId?: true
  }

  export type CategorieActiviteMinAggregateInputType = {
    id?: true
    lbl_categorie?: true
    avec_equipement?: true
    couleur?: true
    avec_notification?: true
    is_supprime?: true
    imageId?: true
  }

  export type CategorieActiviteMaxAggregateInputType = {
    id?: true
    lbl_categorie?: true
    avec_equipement?: true
    couleur?: true
    avec_notification?: true
    is_supprime?: true
    imageId?: true
  }

  export type CategorieActiviteCountAggregateInputType = {
    id?: true
    lbl_categorie?: true
    avec_equipement?: true
    couleur?: true
    avec_notification?: true
    is_supprime?: true
    imageId?: true
    _all?: true
  }

  export type CategorieActiviteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategorieActivite to aggregate.
     */
    where?: CategorieActiviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategorieActivites to fetch.
     */
    orderBy?: CategorieActiviteOrderByWithRelationInput | CategorieActiviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategorieActiviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategorieActivites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategorieActivites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategorieActivites
    **/
    _count?: true | CategorieActiviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategorieActiviteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorieActiviteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategorieActiviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategorieActiviteMaxAggregateInputType
  }

  export type GetCategorieActiviteAggregateType<T extends CategorieActiviteAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorieActivite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorieActivite[P]>
      : GetScalarType<T[P], AggregateCategorieActivite[P]>
  }




  export type CategorieActiviteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategorieActiviteWhereInput
    orderBy?: CategorieActiviteOrderByWithAggregationInput | CategorieActiviteOrderByWithAggregationInput[]
    by: CategorieActiviteScalarFieldEnum[] | CategorieActiviteScalarFieldEnum
    having?: CategorieActiviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategorieActiviteCountAggregateInputType | true
    _avg?: CategorieActiviteAvgAggregateInputType
    _sum?: CategorieActiviteSumAggregateInputType
    _min?: CategorieActiviteMinAggregateInputType
    _max?: CategorieActiviteMaxAggregateInputType
  }

  export type CategorieActiviteGroupByOutputType = {
    id: number
    lbl_categorie: string
    avec_equipement: boolean
    couleur: string
    avec_notification: boolean
    is_supprime: boolean
    imageId: number | null
    _count: CategorieActiviteCountAggregateOutputType | null
    _avg: CategorieActiviteAvgAggregateOutputType | null
    _sum: CategorieActiviteSumAggregateOutputType | null
    _min: CategorieActiviteMinAggregateOutputType | null
    _max: CategorieActiviteMaxAggregateOutputType | null
  }

  type GetCategorieActiviteGroupByPayload<T extends CategorieActiviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategorieActiviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategorieActiviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategorieActiviteGroupByOutputType[P]>
            : GetScalarType<T[P], CategorieActiviteGroupByOutputType[P]>
        }
      >
    >


  export type CategorieActiviteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lbl_categorie?: boolean
    avec_equipement?: boolean
    couleur?: boolean
    avec_notification?: boolean
    is_supprime?: boolean
    imageId?: boolean
    image?: boolean | CategorieActivite$imageArgs<ExtArgs>
    activites?: boolean | CategorieActivite$activitesArgs<ExtArgs>
    _count?: boolean | CategorieActiviteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorieActivite"]>

  export type CategorieActiviteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lbl_categorie?: boolean
    avec_equipement?: boolean
    couleur?: boolean
    avec_notification?: boolean
    is_supprime?: boolean
    imageId?: boolean
    image?: boolean | CategorieActivite$imageArgs<ExtArgs>
  }, ExtArgs["result"]["categorieActivite"]>

  export type CategorieActiviteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lbl_categorie?: boolean
    avec_equipement?: boolean
    couleur?: boolean
    avec_notification?: boolean
    is_supprime?: boolean
    imageId?: boolean
    image?: boolean | CategorieActivite$imageArgs<ExtArgs>
  }, ExtArgs["result"]["categorieActivite"]>

  export type CategorieActiviteSelectScalar = {
    id?: boolean
    lbl_categorie?: boolean
    avec_equipement?: boolean
    couleur?: boolean
    avec_notification?: boolean
    is_supprime?: boolean
    imageId?: boolean
  }

  export type CategorieActiviteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lbl_categorie" | "avec_equipement" | "couleur" | "avec_notification" | "is_supprime" | "imageId", ExtArgs["result"]["categorieActivite"]>
  export type CategorieActiviteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | CategorieActivite$imageArgs<ExtArgs>
    activites?: boolean | CategorieActivite$activitesArgs<ExtArgs>
    _count?: boolean | CategorieActiviteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategorieActiviteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | CategorieActivite$imageArgs<ExtArgs>
  }
  export type CategorieActiviteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | CategorieActivite$imageArgs<ExtArgs>
  }

  export type $CategorieActivitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategorieActivite"
    objects: {
      image: Prisma.$FichierPayload<ExtArgs> | null
      activites: Prisma.$ActivitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lbl_categorie: string
      avec_equipement: boolean
      couleur: string
      avec_notification: boolean
      is_supprime: boolean
      imageId: number | null
    }, ExtArgs["result"]["categorieActivite"]>
    composites: {}
  }

  type CategorieActiviteGetPayload<S extends boolean | null | undefined | CategorieActiviteDefaultArgs> = $Result.GetResult<Prisma.$CategorieActivitePayload, S>

  type CategorieActiviteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategorieActiviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategorieActiviteCountAggregateInputType | true
    }

  export interface CategorieActiviteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategorieActivite'], meta: { name: 'CategorieActivite' } }
    /**
     * Find zero or one CategorieActivite that matches the filter.
     * @param {CategorieActiviteFindUniqueArgs} args - Arguments to find a CategorieActivite
     * @example
     * // Get one CategorieActivite
     * const categorieActivite = await prisma.categorieActivite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategorieActiviteFindUniqueArgs>(args: SelectSubset<T, CategorieActiviteFindUniqueArgs<ExtArgs>>): Prisma__CategorieActiviteClient<$Result.GetResult<Prisma.$CategorieActivitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategorieActivite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategorieActiviteFindUniqueOrThrowArgs} args - Arguments to find a CategorieActivite
     * @example
     * // Get one CategorieActivite
     * const categorieActivite = await prisma.categorieActivite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategorieActiviteFindUniqueOrThrowArgs>(args: SelectSubset<T, CategorieActiviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategorieActiviteClient<$Result.GetResult<Prisma.$CategorieActivitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategorieActivite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieActiviteFindFirstArgs} args - Arguments to find a CategorieActivite
     * @example
     * // Get one CategorieActivite
     * const categorieActivite = await prisma.categorieActivite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategorieActiviteFindFirstArgs>(args?: SelectSubset<T, CategorieActiviteFindFirstArgs<ExtArgs>>): Prisma__CategorieActiviteClient<$Result.GetResult<Prisma.$CategorieActivitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategorieActivite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieActiviteFindFirstOrThrowArgs} args - Arguments to find a CategorieActivite
     * @example
     * // Get one CategorieActivite
     * const categorieActivite = await prisma.categorieActivite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategorieActiviteFindFirstOrThrowArgs>(args?: SelectSubset<T, CategorieActiviteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategorieActiviteClient<$Result.GetResult<Prisma.$CategorieActivitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategorieActivites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieActiviteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategorieActivites
     * const categorieActivites = await prisma.categorieActivite.findMany()
     * 
     * // Get first 10 CategorieActivites
     * const categorieActivites = await prisma.categorieActivite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categorieActiviteWithIdOnly = await prisma.categorieActivite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategorieActiviteFindManyArgs>(args?: SelectSubset<T, CategorieActiviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategorieActivitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategorieActivite.
     * @param {CategorieActiviteCreateArgs} args - Arguments to create a CategorieActivite.
     * @example
     * // Create one CategorieActivite
     * const CategorieActivite = await prisma.categorieActivite.create({
     *   data: {
     *     // ... data to create a CategorieActivite
     *   }
     * })
     * 
     */
    create<T extends CategorieActiviteCreateArgs>(args: SelectSubset<T, CategorieActiviteCreateArgs<ExtArgs>>): Prisma__CategorieActiviteClient<$Result.GetResult<Prisma.$CategorieActivitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategorieActivites.
     * @param {CategorieActiviteCreateManyArgs} args - Arguments to create many CategorieActivites.
     * @example
     * // Create many CategorieActivites
     * const categorieActivite = await prisma.categorieActivite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategorieActiviteCreateManyArgs>(args?: SelectSubset<T, CategorieActiviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategorieActivites and returns the data saved in the database.
     * @param {CategorieActiviteCreateManyAndReturnArgs} args - Arguments to create many CategorieActivites.
     * @example
     * // Create many CategorieActivites
     * const categorieActivite = await prisma.categorieActivite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategorieActivites and only return the `id`
     * const categorieActiviteWithIdOnly = await prisma.categorieActivite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategorieActiviteCreateManyAndReturnArgs>(args?: SelectSubset<T, CategorieActiviteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategorieActivitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CategorieActivite.
     * @param {CategorieActiviteDeleteArgs} args - Arguments to delete one CategorieActivite.
     * @example
     * // Delete one CategorieActivite
     * const CategorieActivite = await prisma.categorieActivite.delete({
     *   where: {
     *     // ... filter to delete one CategorieActivite
     *   }
     * })
     * 
     */
    delete<T extends CategorieActiviteDeleteArgs>(args: SelectSubset<T, CategorieActiviteDeleteArgs<ExtArgs>>): Prisma__CategorieActiviteClient<$Result.GetResult<Prisma.$CategorieActivitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategorieActivite.
     * @param {CategorieActiviteUpdateArgs} args - Arguments to update one CategorieActivite.
     * @example
     * // Update one CategorieActivite
     * const categorieActivite = await prisma.categorieActivite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategorieActiviteUpdateArgs>(args: SelectSubset<T, CategorieActiviteUpdateArgs<ExtArgs>>): Prisma__CategorieActiviteClient<$Result.GetResult<Prisma.$CategorieActivitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategorieActivites.
     * @param {CategorieActiviteDeleteManyArgs} args - Arguments to filter CategorieActivites to delete.
     * @example
     * // Delete a few CategorieActivites
     * const { count } = await prisma.categorieActivite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategorieActiviteDeleteManyArgs>(args?: SelectSubset<T, CategorieActiviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategorieActivites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieActiviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategorieActivites
     * const categorieActivite = await prisma.categorieActivite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategorieActiviteUpdateManyArgs>(args: SelectSubset<T, CategorieActiviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategorieActivites and returns the data updated in the database.
     * @param {CategorieActiviteUpdateManyAndReturnArgs} args - Arguments to update many CategorieActivites.
     * @example
     * // Update many CategorieActivites
     * const categorieActivite = await prisma.categorieActivite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CategorieActivites and only return the `id`
     * const categorieActiviteWithIdOnly = await prisma.categorieActivite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategorieActiviteUpdateManyAndReturnArgs>(args: SelectSubset<T, CategorieActiviteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategorieActivitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CategorieActivite.
     * @param {CategorieActiviteUpsertArgs} args - Arguments to update or create a CategorieActivite.
     * @example
     * // Update or create a CategorieActivite
     * const categorieActivite = await prisma.categorieActivite.upsert({
     *   create: {
     *     // ... data to create a CategorieActivite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategorieActivite we want to update
     *   }
     * })
     */
    upsert<T extends CategorieActiviteUpsertArgs>(args: SelectSubset<T, CategorieActiviteUpsertArgs<ExtArgs>>): Prisma__CategorieActiviteClient<$Result.GetResult<Prisma.$CategorieActivitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategorieActivites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieActiviteCountArgs} args - Arguments to filter CategorieActivites to count.
     * @example
     * // Count the number of CategorieActivites
     * const count = await prisma.categorieActivite.count({
     *   where: {
     *     // ... the filter for the CategorieActivites we want to count
     *   }
     * })
    **/
    count<T extends CategorieActiviteCountArgs>(
      args?: Subset<T, CategorieActiviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategorieActiviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategorieActivite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieActiviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategorieActiviteAggregateArgs>(args: Subset<T, CategorieActiviteAggregateArgs>): Prisma.PrismaPromise<GetCategorieActiviteAggregateType<T>>

    /**
     * Group by CategorieActivite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieActiviteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategorieActiviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategorieActiviteGroupByArgs['orderBy'] }
        : { orderBy?: CategorieActiviteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategorieActiviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorieActiviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategorieActivite model
   */
  readonly fields: CategorieActiviteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategorieActivite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategorieActiviteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    image<T extends CategorieActivite$imageArgs<ExtArgs> = {}>(args?: Subset<T, CategorieActivite$imageArgs<ExtArgs>>): Prisma__FichierClient<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    activites<T extends CategorieActivite$activitesArgs<ExtArgs> = {}>(args?: Subset<T, CategorieActivite$activitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CategorieActivite model
   */
  interface CategorieActiviteFieldRefs {
    readonly id: FieldRef<"CategorieActivite", 'Int'>
    readonly lbl_categorie: FieldRef<"CategorieActivite", 'String'>
    readonly avec_equipement: FieldRef<"CategorieActivite", 'Boolean'>
    readonly couleur: FieldRef<"CategorieActivite", 'String'>
    readonly avec_notification: FieldRef<"CategorieActivite", 'Boolean'>
    readonly is_supprime: FieldRef<"CategorieActivite", 'Boolean'>
    readonly imageId: FieldRef<"CategorieActivite", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CategorieActivite findUnique
   */
  export type CategorieActiviteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieActivite
     */
    select?: CategorieActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieActivite
     */
    omit?: CategorieActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieActiviteInclude<ExtArgs> | null
    /**
     * Filter, which CategorieActivite to fetch.
     */
    where: CategorieActiviteWhereUniqueInput
  }

  /**
   * CategorieActivite findUniqueOrThrow
   */
  export type CategorieActiviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieActivite
     */
    select?: CategorieActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieActivite
     */
    omit?: CategorieActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieActiviteInclude<ExtArgs> | null
    /**
     * Filter, which CategorieActivite to fetch.
     */
    where: CategorieActiviteWhereUniqueInput
  }

  /**
   * CategorieActivite findFirst
   */
  export type CategorieActiviteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieActivite
     */
    select?: CategorieActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieActivite
     */
    omit?: CategorieActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieActiviteInclude<ExtArgs> | null
    /**
     * Filter, which CategorieActivite to fetch.
     */
    where?: CategorieActiviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategorieActivites to fetch.
     */
    orderBy?: CategorieActiviteOrderByWithRelationInput | CategorieActiviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategorieActivites.
     */
    cursor?: CategorieActiviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategorieActivites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategorieActivites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategorieActivites.
     */
    distinct?: CategorieActiviteScalarFieldEnum | CategorieActiviteScalarFieldEnum[]
  }

  /**
   * CategorieActivite findFirstOrThrow
   */
  export type CategorieActiviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieActivite
     */
    select?: CategorieActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieActivite
     */
    omit?: CategorieActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieActiviteInclude<ExtArgs> | null
    /**
     * Filter, which CategorieActivite to fetch.
     */
    where?: CategorieActiviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategorieActivites to fetch.
     */
    orderBy?: CategorieActiviteOrderByWithRelationInput | CategorieActiviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategorieActivites.
     */
    cursor?: CategorieActiviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategorieActivites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategorieActivites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategorieActivites.
     */
    distinct?: CategorieActiviteScalarFieldEnum | CategorieActiviteScalarFieldEnum[]
  }

  /**
   * CategorieActivite findMany
   */
  export type CategorieActiviteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieActivite
     */
    select?: CategorieActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieActivite
     */
    omit?: CategorieActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieActiviteInclude<ExtArgs> | null
    /**
     * Filter, which CategorieActivites to fetch.
     */
    where?: CategorieActiviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategorieActivites to fetch.
     */
    orderBy?: CategorieActiviteOrderByWithRelationInput | CategorieActiviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategorieActivites.
     */
    cursor?: CategorieActiviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategorieActivites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategorieActivites.
     */
    skip?: number
    distinct?: CategorieActiviteScalarFieldEnum | CategorieActiviteScalarFieldEnum[]
  }

  /**
   * CategorieActivite create
   */
  export type CategorieActiviteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieActivite
     */
    select?: CategorieActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieActivite
     */
    omit?: CategorieActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieActiviteInclude<ExtArgs> | null
    /**
     * The data needed to create a CategorieActivite.
     */
    data: XOR<CategorieActiviteCreateInput, CategorieActiviteUncheckedCreateInput>
  }

  /**
   * CategorieActivite createMany
   */
  export type CategorieActiviteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategorieActivites.
     */
    data: CategorieActiviteCreateManyInput | CategorieActiviteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategorieActivite createManyAndReturn
   */
  export type CategorieActiviteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieActivite
     */
    select?: CategorieActiviteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieActivite
     */
    omit?: CategorieActiviteOmit<ExtArgs> | null
    /**
     * The data used to create many CategorieActivites.
     */
    data: CategorieActiviteCreateManyInput | CategorieActiviteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieActiviteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CategorieActivite update
   */
  export type CategorieActiviteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieActivite
     */
    select?: CategorieActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieActivite
     */
    omit?: CategorieActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieActiviteInclude<ExtArgs> | null
    /**
     * The data needed to update a CategorieActivite.
     */
    data: XOR<CategorieActiviteUpdateInput, CategorieActiviteUncheckedUpdateInput>
    /**
     * Choose, which CategorieActivite to update.
     */
    where: CategorieActiviteWhereUniqueInput
  }

  /**
   * CategorieActivite updateMany
   */
  export type CategorieActiviteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategorieActivites.
     */
    data: XOR<CategorieActiviteUpdateManyMutationInput, CategorieActiviteUncheckedUpdateManyInput>
    /**
     * Filter which CategorieActivites to update
     */
    where?: CategorieActiviteWhereInput
    /**
     * Limit how many CategorieActivites to update.
     */
    limit?: number
  }

  /**
   * CategorieActivite updateManyAndReturn
   */
  export type CategorieActiviteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieActivite
     */
    select?: CategorieActiviteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieActivite
     */
    omit?: CategorieActiviteOmit<ExtArgs> | null
    /**
     * The data used to update CategorieActivites.
     */
    data: XOR<CategorieActiviteUpdateManyMutationInput, CategorieActiviteUncheckedUpdateManyInput>
    /**
     * Filter which CategorieActivites to update
     */
    where?: CategorieActiviteWhereInput
    /**
     * Limit how many CategorieActivites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieActiviteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CategorieActivite upsert
   */
  export type CategorieActiviteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieActivite
     */
    select?: CategorieActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieActivite
     */
    omit?: CategorieActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieActiviteInclude<ExtArgs> | null
    /**
     * The filter to search for the CategorieActivite to update in case it exists.
     */
    where: CategorieActiviteWhereUniqueInput
    /**
     * In case the CategorieActivite found by the `where` argument doesn't exist, create a new CategorieActivite with this data.
     */
    create: XOR<CategorieActiviteCreateInput, CategorieActiviteUncheckedCreateInput>
    /**
     * In case the CategorieActivite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategorieActiviteUpdateInput, CategorieActiviteUncheckedUpdateInput>
  }

  /**
   * CategorieActivite delete
   */
  export type CategorieActiviteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieActivite
     */
    select?: CategorieActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieActivite
     */
    omit?: CategorieActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieActiviteInclude<ExtArgs> | null
    /**
     * Filter which CategorieActivite to delete.
     */
    where: CategorieActiviteWhereUniqueInput
  }

  /**
   * CategorieActivite deleteMany
   */
  export type CategorieActiviteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategorieActivites to delete
     */
    where?: CategorieActiviteWhereInput
    /**
     * Limit how many CategorieActivites to delete.
     */
    limit?: number
  }

  /**
   * CategorieActivite.image
   */
  export type CategorieActivite$imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    where?: FichierWhereInput
  }

  /**
   * CategorieActivite.activites
   */
  export type CategorieActivite$activitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
    where?: ActiviteWhereInput
    orderBy?: ActiviteOrderByWithRelationInput | ActiviteOrderByWithRelationInput[]
    cursor?: ActiviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActiviteScalarFieldEnum | ActiviteScalarFieldEnum[]
  }

  /**
   * CategorieActivite without action
   */
  export type CategorieActiviteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieActivite
     */
    select?: CategorieActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieActivite
     */
    omit?: CategorieActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieActiviteInclude<ExtArgs> | null
  }


  /**
   * Model Activite
   */

  export type AggregateActivite = {
    _count: ActiviteCountAggregateOutputType | null
    _avg: ActiviteAvgAggregateOutputType | null
    _sum: ActiviteSumAggregateOutputType | null
    _min: ActiviteMinAggregateOutputType | null
    _max: ActiviteMaxAggregateOutputType | null
  }

  export type ActiviteAvgAggregateOutputType = {
    id: number | null
    categorieId: number | null
  }

  export type ActiviteSumAggregateOutputType = {
    id: number | null
    categorieId: number | null
  }

  export type ActiviteMinAggregateOutputType = {
    id: number | null
    titre: string | null
    contenu: string | null
    date_heure_debut: Date | null
    date_heure_fin: Date | null
    categorieId: number | null
  }

  export type ActiviteMaxAggregateOutputType = {
    id: number | null
    titre: string | null
    contenu: string | null
    date_heure_debut: Date | null
    date_heure_fin: Date | null
    categorieId: number | null
  }

  export type ActiviteCountAggregateOutputType = {
    id: number
    titre: number
    contenu: number
    date_heure_debut: number
    date_heure_fin: number
    categorieId: number
    _all: number
  }


  export type ActiviteAvgAggregateInputType = {
    id?: true
    categorieId?: true
  }

  export type ActiviteSumAggregateInputType = {
    id?: true
    categorieId?: true
  }

  export type ActiviteMinAggregateInputType = {
    id?: true
    titre?: true
    contenu?: true
    date_heure_debut?: true
    date_heure_fin?: true
    categorieId?: true
  }

  export type ActiviteMaxAggregateInputType = {
    id?: true
    titre?: true
    contenu?: true
    date_heure_debut?: true
    date_heure_fin?: true
    categorieId?: true
  }

  export type ActiviteCountAggregateInputType = {
    id?: true
    titre?: true
    contenu?: true
    date_heure_debut?: true
    date_heure_fin?: true
    categorieId?: true
    _all?: true
  }

  export type ActiviteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activite to aggregate.
     */
    where?: ActiviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activites to fetch.
     */
    orderBy?: ActiviteOrderByWithRelationInput | ActiviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActiviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activites
    **/
    _count?: true | ActiviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActiviteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActiviteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActiviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActiviteMaxAggregateInputType
  }

  export type GetActiviteAggregateType<T extends ActiviteAggregateArgs> = {
        [P in keyof T & keyof AggregateActivite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivite[P]>
      : GetScalarType<T[P], AggregateActivite[P]>
  }




  export type ActiviteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActiviteWhereInput
    orderBy?: ActiviteOrderByWithAggregationInput | ActiviteOrderByWithAggregationInput[]
    by: ActiviteScalarFieldEnum[] | ActiviteScalarFieldEnum
    having?: ActiviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActiviteCountAggregateInputType | true
    _avg?: ActiviteAvgAggregateInputType
    _sum?: ActiviteSumAggregateInputType
    _min?: ActiviteMinAggregateInputType
    _max?: ActiviteMaxAggregateInputType
  }

  export type ActiviteGroupByOutputType = {
    id: number
    titre: string
    contenu: string
    date_heure_debut: Date
    date_heure_fin: Date
    categorieId: number
    _count: ActiviteCountAggregateOutputType | null
    _avg: ActiviteAvgAggregateOutputType | null
    _sum: ActiviteSumAggregateOutputType | null
    _min: ActiviteMinAggregateOutputType | null
    _max: ActiviteMaxAggregateOutputType | null
  }

  type GetActiviteGroupByPayload<T extends ActiviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActiviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActiviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActiviteGroupByOutputType[P]>
            : GetScalarType<T[P], ActiviteGroupByOutputType[P]>
        }
      >
    >


  export type ActiviteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    contenu?: boolean
    date_heure_debut?: boolean
    date_heure_fin?: boolean
    categorieId?: boolean
    categorie?: boolean | CategorieActiviteDefaultArgs<ExtArgs>
    participants?: boolean | Activite$participantsArgs<ExtArgs>
    _count?: boolean | ActiviteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activite"]>

  export type ActiviteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    contenu?: boolean
    date_heure_debut?: boolean
    date_heure_fin?: boolean
    categorieId?: boolean
    categorie?: boolean | CategorieActiviteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activite"]>

  export type ActiviteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    contenu?: boolean
    date_heure_debut?: boolean
    date_heure_fin?: boolean
    categorieId?: boolean
    categorie?: boolean | CategorieActiviteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activite"]>

  export type ActiviteSelectScalar = {
    id?: boolean
    titre?: boolean
    contenu?: boolean
    date_heure_debut?: boolean
    date_heure_fin?: boolean
    categorieId?: boolean
  }

  export type ActiviteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "contenu" | "date_heure_debut" | "date_heure_fin" | "categorieId", ExtArgs["result"]["activite"]>
  export type ActiviteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | CategorieActiviteDefaultArgs<ExtArgs>
    participants?: boolean | Activite$participantsArgs<ExtArgs>
    _count?: boolean | ActiviteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActiviteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | CategorieActiviteDefaultArgs<ExtArgs>
  }
  export type ActiviteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | CategorieActiviteDefaultArgs<ExtArgs>
  }

  export type $ActivitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activite"
    objects: {
      categorie: Prisma.$CategorieActivitePayload<ExtArgs>
      participants: Prisma.$MembreActivitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titre: string
      contenu: string
      date_heure_debut: Date
      date_heure_fin: Date
      categorieId: number
    }, ExtArgs["result"]["activite"]>
    composites: {}
  }

  type ActiviteGetPayload<S extends boolean | null | undefined | ActiviteDefaultArgs> = $Result.GetResult<Prisma.$ActivitePayload, S>

  type ActiviteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActiviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActiviteCountAggregateInputType | true
    }

  export interface ActiviteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activite'], meta: { name: 'Activite' } }
    /**
     * Find zero or one Activite that matches the filter.
     * @param {ActiviteFindUniqueArgs} args - Arguments to find a Activite
     * @example
     * // Get one Activite
     * const activite = await prisma.activite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActiviteFindUniqueArgs>(args: SelectSubset<T, ActiviteFindUniqueArgs<ExtArgs>>): Prisma__ActiviteClient<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActiviteFindUniqueOrThrowArgs} args - Arguments to find a Activite
     * @example
     * // Get one Activite
     * const activite = await prisma.activite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActiviteFindUniqueOrThrowArgs>(args: SelectSubset<T, ActiviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActiviteClient<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiviteFindFirstArgs} args - Arguments to find a Activite
     * @example
     * // Get one Activite
     * const activite = await prisma.activite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActiviteFindFirstArgs>(args?: SelectSubset<T, ActiviteFindFirstArgs<ExtArgs>>): Prisma__ActiviteClient<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiviteFindFirstOrThrowArgs} args - Arguments to find a Activite
     * @example
     * // Get one Activite
     * const activite = await prisma.activite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActiviteFindFirstOrThrowArgs>(args?: SelectSubset<T, ActiviteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActiviteClient<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiviteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activites
     * const activites = await prisma.activite.findMany()
     * 
     * // Get first 10 Activites
     * const activites = await prisma.activite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activiteWithIdOnly = await prisma.activite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActiviteFindManyArgs>(args?: SelectSubset<T, ActiviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activite.
     * @param {ActiviteCreateArgs} args - Arguments to create a Activite.
     * @example
     * // Create one Activite
     * const Activite = await prisma.activite.create({
     *   data: {
     *     // ... data to create a Activite
     *   }
     * })
     * 
     */
    create<T extends ActiviteCreateArgs>(args: SelectSubset<T, ActiviteCreateArgs<ExtArgs>>): Prisma__ActiviteClient<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activites.
     * @param {ActiviteCreateManyArgs} args - Arguments to create many Activites.
     * @example
     * // Create many Activites
     * const activite = await prisma.activite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActiviteCreateManyArgs>(args?: SelectSubset<T, ActiviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activites and returns the data saved in the database.
     * @param {ActiviteCreateManyAndReturnArgs} args - Arguments to create many Activites.
     * @example
     * // Create many Activites
     * const activite = await prisma.activite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activites and only return the `id`
     * const activiteWithIdOnly = await prisma.activite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActiviteCreateManyAndReturnArgs>(args?: SelectSubset<T, ActiviteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activite.
     * @param {ActiviteDeleteArgs} args - Arguments to delete one Activite.
     * @example
     * // Delete one Activite
     * const Activite = await prisma.activite.delete({
     *   where: {
     *     // ... filter to delete one Activite
     *   }
     * })
     * 
     */
    delete<T extends ActiviteDeleteArgs>(args: SelectSubset<T, ActiviteDeleteArgs<ExtArgs>>): Prisma__ActiviteClient<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activite.
     * @param {ActiviteUpdateArgs} args - Arguments to update one Activite.
     * @example
     * // Update one Activite
     * const activite = await prisma.activite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActiviteUpdateArgs>(args: SelectSubset<T, ActiviteUpdateArgs<ExtArgs>>): Prisma__ActiviteClient<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activites.
     * @param {ActiviteDeleteManyArgs} args - Arguments to filter Activites to delete.
     * @example
     * // Delete a few Activites
     * const { count } = await prisma.activite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActiviteDeleteManyArgs>(args?: SelectSubset<T, ActiviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activites
     * const activite = await prisma.activite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActiviteUpdateManyArgs>(args: SelectSubset<T, ActiviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activites and returns the data updated in the database.
     * @param {ActiviteUpdateManyAndReturnArgs} args - Arguments to update many Activites.
     * @example
     * // Update many Activites
     * const activite = await prisma.activite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activites and only return the `id`
     * const activiteWithIdOnly = await prisma.activite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActiviteUpdateManyAndReturnArgs>(args: SelectSubset<T, ActiviteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activite.
     * @param {ActiviteUpsertArgs} args - Arguments to update or create a Activite.
     * @example
     * // Update or create a Activite
     * const activite = await prisma.activite.upsert({
     *   create: {
     *     // ... data to create a Activite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activite we want to update
     *   }
     * })
     */
    upsert<T extends ActiviteUpsertArgs>(args: SelectSubset<T, ActiviteUpsertArgs<ExtArgs>>): Prisma__ActiviteClient<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiviteCountArgs} args - Arguments to filter Activites to count.
     * @example
     * // Count the number of Activites
     * const count = await prisma.activite.count({
     *   where: {
     *     // ... the filter for the Activites we want to count
     *   }
     * })
    **/
    count<T extends ActiviteCountArgs>(
      args?: Subset<T, ActiviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActiviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActiviteAggregateArgs>(args: Subset<T, ActiviteAggregateArgs>): Prisma.PrismaPromise<GetActiviteAggregateType<T>>

    /**
     * Group by Activite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiviteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActiviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActiviteGroupByArgs['orderBy'] }
        : { orderBy?: ActiviteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActiviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActiviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activite model
   */
  readonly fields: ActiviteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActiviteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categorie<T extends CategorieActiviteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategorieActiviteDefaultArgs<ExtArgs>>): Prisma__CategorieActiviteClient<$Result.GetResult<Prisma.$CategorieActivitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends Activite$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Activite$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembreActivitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Activite model
   */
  interface ActiviteFieldRefs {
    readonly id: FieldRef<"Activite", 'Int'>
    readonly titre: FieldRef<"Activite", 'String'>
    readonly contenu: FieldRef<"Activite", 'String'>
    readonly date_heure_debut: FieldRef<"Activite", 'DateTime'>
    readonly date_heure_fin: FieldRef<"Activite", 'DateTime'>
    readonly categorieId: FieldRef<"Activite", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Activite findUnique
   */
  export type ActiviteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
    /**
     * Filter, which Activite to fetch.
     */
    where: ActiviteWhereUniqueInput
  }

  /**
   * Activite findUniqueOrThrow
   */
  export type ActiviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
    /**
     * Filter, which Activite to fetch.
     */
    where: ActiviteWhereUniqueInput
  }

  /**
   * Activite findFirst
   */
  export type ActiviteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
    /**
     * Filter, which Activite to fetch.
     */
    where?: ActiviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activites to fetch.
     */
    orderBy?: ActiviteOrderByWithRelationInput | ActiviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activites.
     */
    cursor?: ActiviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activites.
     */
    distinct?: ActiviteScalarFieldEnum | ActiviteScalarFieldEnum[]
  }

  /**
   * Activite findFirstOrThrow
   */
  export type ActiviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
    /**
     * Filter, which Activite to fetch.
     */
    where?: ActiviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activites to fetch.
     */
    orderBy?: ActiviteOrderByWithRelationInput | ActiviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activites.
     */
    cursor?: ActiviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activites.
     */
    distinct?: ActiviteScalarFieldEnum | ActiviteScalarFieldEnum[]
  }

  /**
   * Activite findMany
   */
  export type ActiviteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
    /**
     * Filter, which Activites to fetch.
     */
    where?: ActiviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activites to fetch.
     */
    orderBy?: ActiviteOrderByWithRelationInput | ActiviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activites.
     */
    cursor?: ActiviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activites.
     */
    skip?: number
    distinct?: ActiviteScalarFieldEnum | ActiviteScalarFieldEnum[]
  }

  /**
   * Activite create
   */
  export type ActiviteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
    /**
     * The data needed to create a Activite.
     */
    data: XOR<ActiviteCreateInput, ActiviteUncheckedCreateInput>
  }

  /**
   * Activite createMany
   */
  export type ActiviteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activites.
     */
    data: ActiviteCreateManyInput | ActiviteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activite createManyAndReturn
   */
  export type ActiviteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * The data used to create many Activites.
     */
    data: ActiviteCreateManyInput | ActiviteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activite update
   */
  export type ActiviteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
    /**
     * The data needed to update a Activite.
     */
    data: XOR<ActiviteUpdateInput, ActiviteUncheckedUpdateInput>
    /**
     * Choose, which Activite to update.
     */
    where: ActiviteWhereUniqueInput
  }

  /**
   * Activite updateMany
   */
  export type ActiviteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activites.
     */
    data: XOR<ActiviteUpdateManyMutationInput, ActiviteUncheckedUpdateManyInput>
    /**
     * Filter which Activites to update
     */
    where?: ActiviteWhereInput
    /**
     * Limit how many Activites to update.
     */
    limit?: number
  }

  /**
   * Activite updateManyAndReturn
   */
  export type ActiviteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * The data used to update Activites.
     */
    data: XOR<ActiviteUpdateManyMutationInput, ActiviteUncheckedUpdateManyInput>
    /**
     * Filter which Activites to update
     */
    where?: ActiviteWhereInput
    /**
     * Limit how many Activites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activite upsert
   */
  export type ActiviteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
    /**
     * The filter to search for the Activite to update in case it exists.
     */
    where: ActiviteWhereUniqueInput
    /**
     * In case the Activite found by the `where` argument doesn't exist, create a new Activite with this data.
     */
    create: XOR<ActiviteCreateInput, ActiviteUncheckedCreateInput>
    /**
     * In case the Activite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActiviteUpdateInput, ActiviteUncheckedUpdateInput>
  }

  /**
   * Activite delete
   */
  export type ActiviteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
    /**
     * Filter which Activite to delete.
     */
    where: ActiviteWhereUniqueInput
  }

  /**
   * Activite deleteMany
   */
  export type ActiviteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activites to delete
     */
    where?: ActiviteWhereInput
    /**
     * Limit how many Activites to delete.
     */
    limit?: number
  }

  /**
   * Activite.participants
   */
  export type Activite$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreActivite
     */
    select?: MembreActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreActivite
     */
    omit?: MembreActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreActiviteInclude<ExtArgs> | null
    where?: MembreActiviteWhereInput
    orderBy?: MembreActiviteOrderByWithRelationInput | MembreActiviteOrderByWithRelationInput[]
    cursor?: MembreActiviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembreActiviteScalarFieldEnum | MembreActiviteScalarFieldEnum[]
  }

  /**
   * Activite without action
   */
  export type ActiviteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
  }


  /**
   * Model MembreActivite
   */

  export type AggregateMembreActivite = {
    _count: MembreActiviteCountAggregateOutputType | null
    _avg: MembreActiviteAvgAggregateOutputType | null
    _sum: MembreActiviteSumAggregateOutputType | null
    _min: MembreActiviteMinAggregateOutputType | null
    _max: MembreActiviteMaxAggregateOutputType | null
  }

  export type MembreActiviteAvgAggregateOutputType = {
    id: number | null
    membreId: number | null
    activiteId: number | null
  }

  export type MembreActiviteSumAggregateOutputType = {
    id: number | null
    membreId: number | null
    activiteId: number | null
  }

  export type MembreActiviteMinAggregateOutputType = {
    id: number | null
    observations: string | null
    dateInscription: Date | null
    membreId: number | null
    activiteId: number | null
  }

  export type MembreActiviteMaxAggregateOutputType = {
    id: number | null
    observations: string | null
    dateInscription: Date | null
    membreId: number | null
    activiteId: number | null
  }

  export type MembreActiviteCountAggregateOutputType = {
    id: number
    observations: number
    dateInscription: number
    membreId: number
    activiteId: number
    _all: number
  }


  export type MembreActiviteAvgAggregateInputType = {
    id?: true
    membreId?: true
    activiteId?: true
  }

  export type MembreActiviteSumAggregateInputType = {
    id?: true
    membreId?: true
    activiteId?: true
  }

  export type MembreActiviteMinAggregateInputType = {
    id?: true
    observations?: true
    dateInscription?: true
    membreId?: true
    activiteId?: true
  }

  export type MembreActiviteMaxAggregateInputType = {
    id?: true
    observations?: true
    dateInscription?: true
    membreId?: true
    activiteId?: true
  }

  export type MembreActiviteCountAggregateInputType = {
    id?: true
    observations?: true
    dateInscription?: true
    membreId?: true
    activiteId?: true
    _all?: true
  }

  export type MembreActiviteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembreActivite to aggregate.
     */
    where?: MembreActiviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembreActivites to fetch.
     */
    orderBy?: MembreActiviteOrderByWithRelationInput | MembreActiviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembreActiviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembreActivites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembreActivites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MembreActivites
    **/
    _count?: true | MembreActiviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembreActiviteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembreActiviteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembreActiviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembreActiviteMaxAggregateInputType
  }

  export type GetMembreActiviteAggregateType<T extends MembreActiviteAggregateArgs> = {
        [P in keyof T & keyof AggregateMembreActivite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembreActivite[P]>
      : GetScalarType<T[P], AggregateMembreActivite[P]>
  }




  export type MembreActiviteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembreActiviteWhereInput
    orderBy?: MembreActiviteOrderByWithAggregationInput | MembreActiviteOrderByWithAggregationInput[]
    by: MembreActiviteScalarFieldEnum[] | MembreActiviteScalarFieldEnum
    having?: MembreActiviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembreActiviteCountAggregateInputType | true
    _avg?: MembreActiviteAvgAggregateInputType
    _sum?: MembreActiviteSumAggregateInputType
    _min?: MembreActiviteMinAggregateInputType
    _max?: MembreActiviteMaxAggregateInputType
  }

  export type MembreActiviteGroupByOutputType = {
    id: number
    observations: string | null
    dateInscription: Date
    membreId: number
    activiteId: number
    _count: MembreActiviteCountAggregateOutputType | null
    _avg: MembreActiviteAvgAggregateOutputType | null
    _sum: MembreActiviteSumAggregateOutputType | null
    _min: MembreActiviteMinAggregateOutputType | null
    _max: MembreActiviteMaxAggregateOutputType | null
  }

  type GetMembreActiviteGroupByPayload<T extends MembreActiviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembreActiviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembreActiviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembreActiviteGroupByOutputType[P]>
            : GetScalarType<T[P], MembreActiviteGroupByOutputType[P]>
        }
      >
    >


  export type MembreActiviteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    observations?: boolean
    dateInscription?: boolean
    membreId?: boolean
    activiteId?: boolean
    membre?: boolean | MembreDefaultArgs<ExtArgs>
    activite?: boolean | ActiviteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membreActivite"]>

  export type MembreActiviteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    observations?: boolean
    dateInscription?: boolean
    membreId?: boolean
    activiteId?: boolean
    membre?: boolean | MembreDefaultArgs<ExtArgs>
    activite?: boolean | ActiviteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membreActivite"]>

  export type MembreActiviteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    observations?: boolean
    dateInscription?: boolean
    membreId?: boolean
    activiteId?: boolean
    membre?: boolean | MembreDefaultArgs<ExtArgs>
    activite?: boolean | ActiviteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membreActivite"]>

  export type MembreActiviteSelectScalar = {
    id?: boolean
    observations?: boolean
    dateInscription?: boolean
    membreId?: boolean
    activiteId?: boolean
  }

  export type MembreActiviteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "observations" | "dateInscription" | "membreId" | "activiteId", ExtArgs["result"]["membreActivite"]>
  export type MembreActiviteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membre?: boolean | MembreDefaultArgs<ExtArgs>
    activite?: boolean | ActiviteDefaultArgs<ExtArgs>
  }
  export type MembreActiviteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membre?: boolean | MembreDefaultArgs<ExtArgs>
    activite?: boolean | ActiviteDefaultArgs<ExtArgs>
  }
  export type MembreActiviteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membre?: boolean | MembreDefaultArgs<ExtArgs>
    activite?: boolean | ActiviteDefaultArgs<ExtArgs>
  }

  export type $MembreActivitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MembreActivite"
    objects: {
      membre: Prisma.$MembrePayload<ExtArgs>
      activite: Prisma.$ActivitePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      observations: string | null
      dateInscription: Date
      membreId: number
      activiteId: number
    }, ExtArgs["result"]["membreActivite"]>
    composites: {}
  }

  type MembreActiviteGetPayload<S extends boolean | null | undefined | MembreActiviteDefaultArgs> = $Result.GetResult<Prisma.$MembreActivitePayload, S>

  type MembreActiviteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembreActiviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembreActiviteCountAggregateInputType | true
    }

  export interface MembreActiviteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MembreActivite'], meta: { name: 'MembreActivite' } }
    /**
     * Find zero or one MembreActivite that matches the filter.
     * @param {MembreActiviteFindUniqueArgs} args - Arguments to find a MembreActivite
     * @example
     * // Get one MembreActivite
     * const membreActivite = await prisma.membreActivite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembreActiviteFindUniqueArgs>(args: SelectSubset<T, MembreActiviteFindUniqueArgs<ExtArgs>>): Prisma__MembreActiviteClient<$Result.GetResult<Prisma.$MembreActivitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MembreActivite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembreActiviteFindUniqueOrThrowArgs} args - Arguments to find a MembreActivite
     * @example
     * // Get one MembreActivite
     * const membreActivite = await prisma.membreActivite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembreActiviteFindUniqueOrThrowArgs>(args: SelectSubset<T, MembreActiviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembreActiviteClient<$Result.GetResult<Prisma.$MembreActivitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembreActivite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreActiviteFindFirstArgs} args - Arguments to find a MembreActivite
     * @example
     * // Get one MembreActivite
     * const membreActivite = await prisma.membreActivite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembreActiviteFindFirstArgs>(args?: SelectSubset<T, MembreActiviteFindFirstArgs<ExtArgs>>): Prisma__MembreActiviteClient<$Result.GetResult<Prisma.$MembreActivitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembreActivite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreActiviteFindFirstOrThrowArgs} args - Arguments to find a MembreActivite
     * @example
     * // Get one MembreActivite
     * const membreActivite = await prisma.membreActivite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembreActiviteFindFirstOrThrowArgs>(args?: SelectSubset<T, MembreActiviteFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembreActiviteClient<$Result.GetResult<Prisma.$MembreActivitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MembreActivites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreActiviteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MembreActivites
     * const membreActivites = await prisma.membreActivite.findMany()
     * 
     * // Get first 10 MembreActivites
     * const membreActivites = await prisma.membreActivite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membreActiviteWithIdOnly = await prisma.membreActivite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembreActiviteFindManyArgs>(args?: SelectSubset<T, MembreActiviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembreActivitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MembreActivite.
     * @param {MembreActiviteCreateArgs} args - Arguments to create a MembreActivite.
     * @example
     * // Create one MembreActivite
     * const MembreActivite = await prisma.membreActivite.create({
     *   data: {
     *     // ... data to create a MembreActivite
     *   }
     * })
     * 
     */
    create<T extends MembreActiviteCreateArgs>(args: SelectSubset<T, MembreActiviteCreateArgs<ExtArgs>>): Prisma__MembreActiviteClient<$Result.GetResult<Prisma.$MembreActivitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MembreActivites.
     * @param {MembreActiviteCreateManyArgs} args - Arguments to create many MembreActivites.
     * @example
     * // Create many MembreActivites
     * const membreActivite = await prisma.membreActivite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembreActiviteCreateManyArgs>(args?: SelectSubset<T, MembreActiviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MembreActivites and returns the data saved in the database.
     * @param {MembreActiviteCreateManyAndReturnArgs} args - Arguments to create many MembreActivites.
     * @example
     * // Create many MembreActivites
     * const membreActivite = await prisma.membreActivite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MembreActivites and only return the `id`
     * const membreActiviteWithIdOnly = await prisma.membreActivite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembreActiviteCreateManyAndReturnArgs>(args?: SelectSubset<T, MembreActiviteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembreActivitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MembreActivite.
     * @param {MembreActiviteDeleteArgs} args - Arguments to delete one MembreActivite.
     * @example
     * // Delete one MembreActivite
     * const MembreActivite = await prisma.membreActivite.delete({
     *   where: {
     *     // ... filter to delete one MembreActivite
     *   }
     * })
     * 
     */
    delete<T extends MembreActiviteDeleteArgs>(args: SelectSubset<T, MembreActiviteDeleteArgs<ExtArgs>>): Prisma__MembreActiviteClient<$Result.GetResult<Prisma.$MembreActivitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MembreActivite.
     * @param {MembreActiviteUpdateArgs} args - Arguments to update one MembreActivite.
     * @example
     * // Update one MembreActivite
     * const membreActivite = await prisma.membreActivite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembreActiviteUpdateArgs>(args: SelectSubset<T, MembreActiviteUpdateArgs<ExtArgs>>): Prisma__MembreActiviteClient<$Result.GetResult<Prisma.$MembreActivitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MembreActivites.
     * @param {MembreActiviteDeleteManyArgs} args - Arguments to filter MembreActivites to delete.
     * @example
     * // Delete a few MembreActivites
     * const { count } = await prisma.membreActivite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembreActiviteDeleteManyArgs>(args?: SelectSubset<T, MembreActiviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembreActivites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreActiviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MembreActivites
     * const membreActivite = await prisma.membreActivite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembreActiviteUpdateManyArgs>(args: SelectSubset<T, MembreActiviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembreActivites and returns the data updated in the database.
     * @param {MembreActiviteUpdateManyAndReturnArgs} args - Arguments to update many MembreActivites.
     * @example
     * // Update many MembreActivites
     * const membreActivite = await prisma.membreActivite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MembreActivites and only return the `id`
     * const membreActiviteWithIdOnly = await prisma.membreActivite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MembreActiviteUpdateManyAndReturnArgs>(args: SelectSubset<T, MembreActiviteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembreActivitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MembreActivite.
     * @param {MembreActiviteUpsertArgs} args - Arguments to update or create a MembreActivite.
     * @example
     * // Update or create a MembreActivite
     * const membreActivite = await prisma.membreActivite.upsert({
     *   create: {
     *     // ... data to create a MembreActivite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MembreActivite we want to update
     *   }
     * })
     */
    upsert<T extends MembreActiviteUpsertArgs>(args: SelectSubset<T, MembreActiviteUpsertArgs<ExtArgs>>): Prisma__MembreActiviteClient<$Result.GetResult<Prisma.$MembreActivitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MembreActivites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreActiviteCountArgs} args - Arguments to filter MembreActivites to count.
     * @example
     * // Count the number of MembreActivites
     * const count = await prisma.membreActivite.count({
     *   where: {
     *     // ... the filter for the MembreActivites we want to count
     *   }
     * })
    **/
    count<T extends MembreActiviteCountArgs>(
      args?: Subset<T, MembreActiviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembreActiviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MembreActivite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreActiviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MembreActiviteAggregateArgs>(args: Subset<T, MembreActiviteAggregateArgs>): Prisma.PrismaPromise<GetMembreActiviteAggregateType<T>>

    /**
     * Group by MembreActivite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreActiviteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MembreActiviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembreActiviteGroupByArgs['orderBy'] }
        : { orderBy?: MembreActiviteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MembreActiviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembreActiviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MembreActivite model
   */
  readonly fields: MembreActiviteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MembreActivite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembreActiviteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    membre<T extends MembreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MembreDefaultArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    activite<T extends ActiviteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActiviteDefaultArgs<ExtArgs>>): Prisma__ActiviteClient<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MembreActivite model
   */
  interface MembreActiviteFieldRefs {
    readonly id: FieldRef<"MembreActivite", 'Int'>
    readonly observations: FieldRef<"MembreActivite", 'String'>
    readonly dateInscription: FieldRef<"MembreActivite", 'DateTime'>
    readonly membreId: FieldRef<"MembreActivite", 'Int'>
    readonly activiteId: FieldRef<"MembreActivite", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MembreActivite findUnique
   */
  export type MembreActiviteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreActivite
     */
    select?: MembreActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreActivite
     */
    omit?: MembreActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreActiviteInclude<ExtArgs> | null
    /**
     * Filter, which MembreActivite to fetch.
     */
    where: MembreActiviteWhereUniqueInput
  }

  /**
   * MembreActivite findUniqueOrThrow
   */
  export type MembreActiviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreActivite
     */
    select?: MembreActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreActivite
     */
    omit?: MembreActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreActiviteInclude<ExtArgs> | null
    /**
     * Filter, which MembreActivite to fetch.
     */
    where: MembreActiviteWhereUniqueInput
  }

  /**
   * MembreActivite findFirst
   */
  export type MembreActiviteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreActivite
     */
    select?: MembreActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreActivite
     */
    omit?: MembreActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreActiviteInclude<ExtArgs> | null
    /**
     * Filter, which MembreActivite to fetch.
     */
    where?: MembreActiviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembreActivites to fetch.
     */
    orderBy?: MembreActiviteOrderByWithRelationInput | MembreActiviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembreActivites.
     */
    cursor?: MembreActiviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembreActivites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembreActivites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembreActivites.
     */
    distinct?: MembreActiviteScalarFieldEnum | MembreActiviteScalarFieldEnum[]
  }

  /**
   * MembreActivite findFirstOrThrow
   */
  export type MembreActiviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreActivite
     */
    select?: MembreActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreActivite
     */
    omit?: MembreActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreActiviteInclude<ExtArgs> | null
    /**
     * Filter, which MembreActivite to fetch.
     */
    where?: MembreActiviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembreActivites to fetch.
     */
    orderBy?: MembreActiviteOrderByWithRelationInput | MembreActiviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembreActivites.
     */
    cursor?: MembreActiviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembreActivites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembreActivites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembreActivites.
     */
    distinct?: MembreActiviteScalarFieldEnum | MembreActiviteScalarFieldEnum[]
  }

  /**
   * MembreActivite findMany
   */
  export type MembreActiviteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreActivite
     */
    select?: MembreActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreActivite
     */
    omit?: MembreActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreActiviteInclude<ExtArgs> | null
    /**
     * Filter, which MembreActivites to fetch.
     */
    where?: MembreActiviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembreActivites to fetch.
     */
    orderBy?: MembreActiviteOrderByWithRelationInput | MembreActiviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MembreActivites.
     */
    cursor?: MembreActiviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembreActivites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembreActivites.
     */
    skip?: number
    distinct?: MembreActiviteScalarFieldEnum | MembreActiviteScalarFieldEnum[]
  }

  /**
   * MembreActivite create
   */
  export type MembreActiviteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreActivite
     */
    select?: MembreActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreActivite
     */
    omit?: MembreActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreActiviteInclude<ExtArgs> | null
    /**
     * The data needed to create a MembreActivite.
     */
    data: XOR<MembreActiviteCreateInput, MembreActiviteUncheckedCreateInput>
  }

  /**
   * MembreActivite createMany
   */
  export type MembreActiviteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MembreActivites.
     */
    data: MembreActiviteCreateManyInput | MembreActiviteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MembreActivite createManyAndReturn
   */
  export type MembreActiviteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreActivite
     */
    select?: MembreActiviteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MembreActivite
     */
    omit?: MembreActiviteOmit<ExtArgs> | null
    /**
     * The data used to create many MembreActivites.
     */
    data: MembreActiviteCreateManyInput | MembreActiviteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreActiviteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MembreActivite update
   */
  export type MembreActiviteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreActivite
     */
    select?: MembreActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreActivite
     */
    omit?: MembreActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreActiviteInclude<ExtArgs> | null
    /**
     * The data needed to update a MembreActivite.
     */
    data: XOR<MembreActiviteUpdateInput, MembreActiviteUncheckedUpdateInput>
    /**
     * Choose, which MembreActivite to update.
     */
    where: MembreActiviteWhereUniqueInput
  }

  /**
   * MembreActivite updateMany
   */
  export type MembreActiviteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MembreActivites.
     */
    data: XOR<MembreActiviteUpdateManyMutationInput, MembreActiviteUncheckedUpdateManyInput>
    /**
     * Filter which MembreActivites to update
     */
    where?: MembreActiviteWhereInput
    /**
     * Limit how many MembreActivites to update.
     */
    limit?: number
  }

  /**
   * MembreActivite updateManyAndReturn
   */
  export type MembreActiviteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreActivite
     */
    select?: MembreActiviteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MembreActivite
     */
    omit?: MembreActiviteOmit<ExtArgs> | null
    /**
     * The data used to update MembreActivites.
     */
    data: XOR<MembreActiviteUpdateManyMutationInput, MembreActiviteUncheckedUpdateManyInput>
    /**
     * Filter which MembreActivites to update
     */
    where?: MembreActiviteWhereInput
    /**
     * Limit how many MembreActivites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreActiviteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MembreActivite upsert
   */
  export type MembreActiviteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreActivite
     */
    select?: MembreActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreActivite
     */
    omit?: MembreActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreActiviteInclude<ExtArgs> | null
    /**
     * The filter to search for the MembreActivite to update in case it exists.
     */
    where: MembreActiviteWhereUniqueInput
    /**
     * In case the MembreActivite found by the `where` argument doesn't exist, create a new MembreActivite with this data.
     */
    create: XOR<MembreActiviteCreateInput, MembreActiviteUncheckedCreateInput>
    /**
     * In case the MembreActivite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembreActiviteUpdateInput, MembreActiviteUncheckedUpdateInput>
  }

  /**
   * MembreActivite delete
   */
  export type MembreActiviteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreActivite
     */
    select?: MembreActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreActivite
     */
    omit?: MembreActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreActiviteInclude<ExtArgs> | null
    /**
     * Filter which MembreActivite to delete.
     */
    where: MembreActiviteWhereUniqueInput
  }

  /**
   * MembreActivite deleteMany
   */
  export type MembreActiviteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembreActivites to delete
     */
    where?: MembreActiviteWhereInput
    /**
     * Limit how many MembreActivites to delete.
     */
    limit?: number
  }

  /**
   * MembreActivite without action
   */
  export type MembreActiviteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreActivite
     */
    select?: MembreActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreActivite
     */
    omit?: MembreActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreActiviteInclude<ExtArgs> | null
  }


  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleAvgAggregateOutputType = {
    id: number | null
    imageId: number | null
    redacteurId: number | null
  }

  export type ArticleSumAggregateOutputType = {
    id: number | null
    imageId: number | null
    redacteurId: number | null
  }

  export type ArticleMinAggregateOutputType = {
    id: number | null
    titre: string | null
    contenu: string | null
    statut: $Enums.StatutArticleTypes | null
    categorie: $Enums.CategorieArticleTypes | null
    imageId: number | null
    redacteurId: number | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: number | null
    titre: string | null
    contenu: string | null
    statut: $Enums.StatutArticleTypes | null
    categorie: $Enums.CategorieArticleTypes | null
    imageId: number | null
    redacteurId: number | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    titre: number
    contenu: number
    statut: number
    categorie: number
    imageId: number
    redacteurId: number
    _all: number
  }


  export type ArticleAvgAggregateInputType = {
    id?: true
    imageId?: true
    redacteurId?: true
  }

  export type ArticleSumAggregateInputType = {
    id?: true
    imageId?: true
    redacteurId?: true
  }

  export type ArticleMinAggregateInputType = {
    id?: true
    titre?: true
    contenu?: true
    statut?: true
    categorie?: true
    imageId?: true
    redacteurId?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    titre?: true
    contenu?: true
    statut?: true
    categorie?: true
    imageId?: true
    redacteurId?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    titre?: true
    contenu?: true
    statut?: true
    categorie?: true
    imageId?: true
    redacteurId?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _avg?: ArticleAvgAggregateInputType
    _sum?: ArticleSumAggregateInputType
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: number
    titre: string
    contenu: string
    statut: $Enums.StatutArticleTypes
    categorie: $Enums.CategorieArticleTypes
    imageId: number | null
    redacteurId: number
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    contenu?: boolean
    statut?: boolean
    categorie?: boolean
    imageId?: boolean
    redacteurId?: boolean
    image?: boolean | Article$imageArgs<ExtArgs>
    redacteur?: boolean | MembreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    contenu?: boolean
    statut?: boolean
    categorie?: boolean
    imageId?: boolean
    redacteurId?: boolean
    image?: boolean | Article$imageArgs<ExtArgs>
    redacteur?: boolean | MembreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    contenu?: boolean
    statut?: boolean
    categorie?: boolean
    imageId?: boolean
    redacteurId?: boolean
    image?: boolean | Article$imageArgs<ExtArgs>
    redacteur?: boolean | MembreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectScalar = {
    id?: boolean
    titre?: boolean
    contenu?: boolean
    statut?: boolean
    categorie?: boolean
    imageId?: boolean
    redacteurId?: boolean
  }

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "contenu" | "statut" | "categorie" | "imageId" | "redacteurId", ExtArgs["result"]["article"]>
  export type ArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | Article$imageArgs<ExtArgs>
    redacteur?: boolean | MembreDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | Article$imageArgs<ExtArgs>
    redacteur?: boolean | MembreDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | Article$imageArgs<ExtArgs>
    redacteur?: boolean | MembreDefaultArgs<ExtArgs>
  }

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {
      image: Prisma.$FichierPayload<ExtArgs> | null
      redacteur: Prisma.$MembrePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titre: string
      contenu: string
      statut: $Enums.StatutArticleTypes
      categorie: $Enums.CategorieArticleTypes
      imageId: number | null
      redacteurId: number
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface ArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleFindManyArgs>(args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends ArticleCreateArgs>(args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCreateManyArgs>(args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {ArticleCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends ArticleDeleteArgs>(args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleUpdateArgs>(args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleDeleteManyArgs>(args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleUpdateManyArgs>(args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {ArticleUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Article model
   */
  readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    image<T extends Article$imageArgs<ExtArgs> = {}>(args?: Subset<T, Article$imageArgs<ExtArgs>>): Prisma__FichierClient<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    redacteur<T extends MembreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MembreDefaultArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Article model
   */
  interface ArticleFieldRefs {
    readonly id: FieldRef<"Article", 'Int'>
    readonly titre: FieldRef<"Article", 'String'>
    readonly contenu: FieldRef<"Article", 'String'>
    readonly statut: FieldRef<"Article", 'StatutArticleTypes'>
    readonly categorie: FieldRef<"Article", 'CategorieArticleTypes'>
    readonly imageId: FieldRef<"Article", 'Int'>
    readonly redacteurId: FieldRef<"Article", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article createManyAndReturn
   */
  export type ArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article updateManyAndReturn
   */
  export type ArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Article.image
   */
  export type Article$imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    where?: FichierWhereInput
  }

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FichierScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    url: 'url',
    type: 'type',
    mime: 'mime',
    taille: 'taille',
    dateCreation: 'dateCreation',
    dateMaj: 'dateMaj'
  };

  export type FichierScalarFieldEnum = (typeof FichierScalarFieldEnum)[keyof typeof FichierScalarFieldEnum]


  export const MembreScalarFieldEnum: {
    id: 'id',
    email: 'email',
    mot_de_passe: 'mot_de_passe',
    est_supprime: 'est_supprime',
    role: 'role'
  };

  export type MembreScalarFieldEnum = (typeof MembreScalarFieldEnum)[keyof typeof MembreScalarFieldEnum]


  export const ProfilScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    telephone: 'telephone',
    communication_mail: 'communication_mail',
    communication_sms: 'communication_sms',
    avatarId: 'avatarId',
    membreId: 'membreId'
  };

  export type ProfilScalarFieldEnum = (typeof ProfilScalarFieldEnum)[keyof typeof ProfilScalarFieldEnum]


  export const CategorieActiviteScalarFieldEnum: {
    id: 'id',
    lbl_categorie: 'lbl_categorie',
    avec_equipement: 'avec_equipement',
    couleur: 'couleur',
    avec_notification: 'avec_notification',
    is_supprime: 'is_supprime',
    imageId: 'imageId'
  };

  export type CategorieActiviteScalarFieldEnum = (typeof CategorieActiviteScalarFieldEnum)[keyof typeof CategorieActiviteScalarFieldEnum]


  export const ActiviteScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    contenu: 'contenu',
    date_heure_debut: 'date_heure_debut',
    date_heure_fin: 'date_heure_fin',
    categorieId: 'categorieId'
  };

  export type ActiviteScalarFieldEnum = (typeof ActiviteScalarFieldEnum)[keyof typeof ActiviteScalarFieldEnum]


  export const MembreActiviteScalarFieldEnum: {
    id: 'id',
    observations: 'observations',
    dateInscription: 'dateInscription',
    membreId: 'membreId',
    activiteId: 'activiteId'
  };

  export type MembreActiviteScalarFieldEnum = (typeof MembreActiviteScalarFieldEnum)[keyof typeof MembreActiviteScalarFieldEnum]


  export const ArticleScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    contenu: 'contenu',
    statut: 'statut',
    categorie: 'categorie',
    imageId: 'imageId',
    redacteurId: 'redacteurId'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'FileTypes'
   */
  export type EnumFileTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileTypes'>
    


  /**
   * Reference to a field of type 'FileTypes[]'
   */
  export type ListEnumFileTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileTypes[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'RoleTypes'
   */
  export type EnumRoleTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleTypes'>
    


  /**
   * Reference to a field of type 'RoleTypes[]'
   */
  export type ListEnumRoleTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleTypes[]'>
    


  /**
   * Reference to a field of type 'StatutArticleTypes'
   */
  export type EnumStatutArticleTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutArticleTypes'>
    


  /**
   * Reference to a field of type 'StatutArticleTypes[]'
   */
  export type ListEnumStatutArticleTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutArticleTypes[]'>
    


  /**
   * Reference to a field of type 'CategorieArticleTypes'
   */
  export type EnumCategorieArticleTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategorieArticleTypes'>
    


  /**
   * Reference to a field of type 'CategorieArticleTypes[]'
   */
  export type ListEnumCategorieArticleTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategorieArticleTypes[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type FichierWhereInput = {
    AND?: FichierWhereInput | FichierWhereInput[]
    OR?: FichierWhereInput[]
    NOT?: FichierWhereInput | FichierWhereInput[]
    id?: IntFilter<"Fichier"> | number
    nom?: StringFilter<"Fichier"> | string
    url?: StringFilter<"Fichier"> | string
    type?: EnumFileTypesFilter<"Fichier"> | $Enums.FileTypes
    mime?: StringFilter<"Fichier"> | string
    taille?: StringFilter<"Fichier"> | string
    dateCreation?: DateTimeFilter<"Fichier"> | Date | string
    dateMaj?: DateTimeFilter<"Fichier"> | Date | string
    articles?: ArticleListRelationFilter
    categoriesActivites?: CategorieActiviteListRelationFilter
    profils?: ProfilListRelationFilter
  }

  export type FichierOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    url?: SortOrder
    type?: SortOrder
    mime?: SortOrder
    taille?: SortOrder
    dateCreation?: SortOrder
    dateMaj?: SortOrder
    articles?: ArticleOrderByRelationAggregateInput
    categoriesActivites?: CategorieActiviteOrderByRelationAggregateInput
    profils?: ProfilOrderByRelationAggregateInput
  }

  export type FichierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FichierWhereInput | FichierWhereInput[]
    OR?: FichierWhereInput[]
    NOT?: FichierWhereInput | FichierWhereInput[]
    nom?: StringFilter<"Fichier"> | string
    url?: StringFilter<"Fichier"> | string
    type?: EnumFileTypesFilter<"Fichier"> | $Enums.FileTypes
    mime?: StringFilter<"Fichier"> | string
    taille?: StringFilter<"Fichier"> | string
    dateCreation?: DateTimeFilter<"Fichier"> | Date | string
    dateMaj?: DateTimeFilter<"Fichier"> | Date | string
    articles?: ArticleListRelationFilter
    categoriesActivites?: CategorieActiviteListRelationFilter
    profils?: ProfilListRelationFilter
  }, "id">

  export type FichierOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    url?: SortOrder
    type?: SortOrder
    mime?: SortOrder
    taille?: SortOrder
    dateCreation?: SortOrder
    dateMaj?: SortOrder
    _count?: FichierCountOrderByAggregateInput
    _avg?: FichierAvgOrderByAggregateInput
    _max?: FichierMaxOrderByAggregateInput
    _min?: FichierMinOrderByAggregateInput
    _sum?: FichierSumOrderByAggregateInput
  }

  export type FichierScalarWhereWithAggregatesInput = {
    AND?: FichierScalarWhereWithAggregatesInput | FichierScalarWhereWithAggregatesInput[]
    OR?: FichierScalarWhereWithAggregatesInput[]
    NOT?: FichierScalarWhereWithAggregatesInput | FichierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fichier"> | number
    nom?: StringWithAggregatesFilter<"Fichier"> | string
    url?: StringWithAggregatesFilter<"Fichier"> | string
    type?: EnumFileTypesWithAggregatesFilter<"Fichier"> | $Enums.FileTypes
    mime?: StringWithAggregatesFilter<"Fichier"> | string
    taille?: StringWithAggregatesFilter<"Fichier"> | string
    dateCreation?: DateTimeWithAggregatesFilter<"Fichier"> | Date | string
    dateMaj?: DateTimeWithAggregatesFilter<"Fichier"> | Date | string
  }

  export type MembreWhereInput = {
    AND?: MembreWhereInput | MembreWhereInput[]
    OR?: MembreWhereInput[]
    NOT?: MembreWhereInput | MembreWhereInput[]
    id?: IntFilter<"Membre"> | number
    email?: StringFilter<"Membre"> | string
    mot_de_passe?: StringFilter<"Membre"> | string
    est_supprime?: BoolFilter<"Membre"> | boolean
    role?: EnumRoleTypesFilter<"Membre"> | $Enums.RoleTypes
    inscriptions?: MembreActiviteListRelationFilter
    profil?: XOR<ProfilNullableScalarRelationFilter, ProfilWhereInput> | null
    articles?: ArticleListRelationFilter
  }

  export type MembreOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    mot_de_passe?: SortOrder
    est_supprime?: SortOrder
    role?: SortOrder
    inscriptions?: MembreActiviteOrderByRelationAggregateInput
    profil?: ProfilOrderByWithRelationInput
    articles?: ArticleOrderByRelationAggregateInput
  }

  export type MembreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: MembreWhereInput | MembreWhereInput[]
    OR?: MembreWhereInput[]
    NOT?: MembreWhereInput | MembreWhereInput[]
    mot_de_passe?: StringFilter<"Membre"> | string
    est_supprime?: BoolFilter<"Membre"> | boolean
    role?: EnumRoleTypesFilter<"Membre"> | $Enums.RoleTypes
    inscriptions?: MembreActiviteListRelationFilter
    profil?: XOR<ProfilNullableScalarRelationFilter, ProfilWhereInput> | null
    articles?: ArticleListRelationFilter
  }, "id" | "email">

  export type MembreOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    mot_de_passe?: SortOrder
    est_supprime?: SortOrder
    role?: SortOrder
    _count?: MembreCountOrderByAggregateInput
    _avg?: MembreAvgOrderByAggregateInput
    _max?: MembreMaxOrderByAggregateInput
    _min?: MembreMinOrderByAggregateInput
    _sum?: MembreSumOrderByAggregateInput
  }

  export type MembreScalarWhereWithAggregatesInput = {
    AND?: MembreScalarWhereWithAggregatesInput | MembreScalarWhereWithAggregatesInput[]
    OR?: MembreScalarWhereWithAggregatesInput[]
    NOT?: MembreScalarWhereWithAggregatesInput | MembreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Membre"> | number
    email?: StringWithAggregatesFilter<"Membre"> | string
    mot_de_passe?: StringWithAggregatesFilter<"Membre"> | string
    est_supprime?: BoolWithAggregatesFilter<"Membre"> | boolean
    role?: EnumRoleTypesWithAggregatesFilter<"Membre"> | $Enums.RoleTypes
  }

  export type ProfilWhereInput = {
    AND?: ProfilWhereInput | ProfilWhereInput[]
    OR?: ProfilWhereInput[]
    NOT?: ProfilWhereInput | ProfilWhereInput[]
    id?: IntFilter<"Profil"> | number
    nom?: StringFilter<"Profil"> | string
    prenom?: StringFilter<"Profil"> | string
    telephone?: StringNullableFilter<"Profil"> | string | null
    communication_mail?: BoolFilter<"Profil"> | boolean
    communication_sms?: BoolFilter<"Profil"> | boolean
    avatarId?: IntNullableFilter<"Profil"> | number | null
    membreId?: IntFilter<"Profil"> | number
    avatar?: XOR<FichierNullableScalarRelationFilter, FichierWhereInput> | null
    membre?: XOR<MembreScalarRelationFilter, MembreWhereInput>
  }

  export type ProfilOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrderInput | SortOrder
    communication_mail?: SortOrder
    communication_sms?: SortOrder
    avatarId?: SortOrderInput | SortOrder
    membreId?: SortOrder
    avatar?: FichierOrderByWithRelationInput
    membre?: MembreOrderByWithRelationInput
  }

  export type ProfilWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    membreId?: number
    AND?: ProfilWhereInput | ProfilWhereInput[]
    OR?: ProfilWhereInput[]
    NOT?: ProfilWhereInput | ProfilWhereInput[]
    nom?: StringFilter<"Profil"> | string
    prenom?: StringFilter<"Profil"> | string
    telephone?: StringNullableFilter<"Profil"> | string | null
    communication_mail?: BoolFilter<"Profil"> | boolean
    communication_sms?: BoolFilter<"Profil"> | boolean
    avatarId?: IntNullableFilter<"Profil"> | number | null
    avatar?: XOR<FichierNullableScalarRelationFilter, FichierWhereInput> | null
    membre?: XOR<MembreScalarRelationFilter, MembreWhereInput>
  }, "id" | "membreId">

  export type ProfilOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrderInput | SortOrder
    communication_mail?: SortOrder
    communication_sms?: SortOrder
    avatarId?: SortOrderInput | SortOrder
    membreId?: SortOrder
    _count?: ProfilCountOrderByAggregateInput
    _avg?: ProfilAvgOrderByAggregateInput
    _max?: ProfilMaxOrderByAggregateInput
    _min?: ProfilMinOrderByAggregateInput
    _sum?: ProfilSumOrderByAggregateInput
  }

  export type ProfilScalarWhereWithAggregatesInput = {
    AND?: ProfilScalarWhereWithAggregatesInput | ProfilScalarWhereWithAggregatesInput[]
    OR?: ProfilScalarWhereWithAggregatesInput[]
    NOT?: ProfilScalarWhereWithAggregatesInput | ProfilScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profil"> | number
    nom?: StringWithAggregatesFilter<"Profil"> | string
    prenom?: StringWithAggregatesFilter<"Profil"> | string
    telephone?: StringNullableWithAggregatesFilter<"Profil"> | string | null
    communication_mail?: BoolWithAggregatesFilter<"Profil"> | boolean
    communication_sms?: BoolWithAggregatesFilter<"Profil"> | boolean
    avatarId?: IntNullableWithAggregatesFilter<"Profil"> | number | null
    membreId?: IntWithAggregatesFilter<"Profil"> | number
  }

  export type CategorieActiviteWhereInput = {
    AND?: CategorieActiviteWhereInput | CategorieActiviteWhereInput[]
    OR?: CategorieActiviteWhereInput[]
    NOT?: CategorieActiviteWhereInput | CategorieActiviteWhereInput[]
    id?: IntFilter<"CategorieActivite"> | number
    lbl_categorie?: StringFilter<"CategorieActivite"> | string
    avec_equipement?: BoolFilter<"CategorieActivite"> | boolean
    couleur?: StringFilter<"CategorieActivite"> | string
    avec_notification?: BoolFilter<"CategorieActivite"> | boolean
    is_supprime?: BoolFilter<"CategorieActivite"> | boolean
    imageId?: IntNullableFilter<"CategorieActivite"> | number | null
    image?: XOR<FichierNullableScalarRelationFilter, FichierWhereInput> | null
    activites?: ActiviteListRelationFilter
  }

  export type CategorieActiviteOrderByWithRelationInput = {
    id?: SortOrder
    lbl_categorie?: SortOrder
    avec_equipement?: SortOrder
    couleur?: SortOrder
    avec_notification?: SortOrder
    is_supprime?: SortOrder
    imageId?: SortOrderInput | SortOrder
    image?: FichierOrderByWithRelationInput
    activites?: ActiviteOrderByRelationAggregateInput
  }

  export type CategorieActiviteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategorieActiviteWhereInput | CategorieActiviteWhereInput[]
    OR?: CategorieActiviteWhereInput[]
    NOT?: CategorieActiviteWhereInput | CategorieActiviteWhereInput[]
    lbl_categorie?: StringFilter<"CategorieActivite"> | string
    avec_equipement?: BoolFilter<"CategorieActivite"> | boolean
    couleur?: StringFilter<"CategorieActivite"> | string
    avec_notification?: BoolFilter<"CategorieActivite"> | boolean
    is_supprime?: BoolFilter<"CategorieActivite"> | boolean
    imageId?: IntNullableFilter<"CategorieActivite"> | number | null
    image?: XOR<FichierNullableScalarRelationFilter, FichierWhereInput> | null
    activites?: ActiviteListRelationFilter
  }, "id">

  export type CategorieActiviteOrderByWithAggregationInput = {
    id?: SortOrder
    lbl_categorie?: SortOrder
    avec_equipement?: SortOrder
    couleur?: SortOrder
    avec_notification?: SortOrder
    is_supprime?: SortOrder
    imageId?: SortOrderInput | SortOrder
    _count?: CategorieActiviteCountOrderByAggregateInput
    _avg?: CategorieActiviteAvgOrderByAggregateInput
    _max?: CategorieActiviteMaxOrderByAggregateInput
    _min?: CategorieActiviteMinOrderByAggregateInput
    _sum?: CategorieActiviteSumOrderByAggregateInput
  }

  export type CategorieActiviteScalarWhereWithAggregatesInput = {
    AND?: CategorieActiviteScalarWhereWithAggregatesInput | CategorieActiviteScalarWhereWithAggregatesInput[]
    OR?: CategorieActiviteScalarWhereWithAggregatesInput[]
    NOT?: CategorieActiviteScalarWhereWithAggregatesInput | CategorieActiviteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CategorieActivite"> | number
    lbl_categorie?: StringWithAggregatesFilter<"CategorieActivite"> | string
    avec_equipement?: BoolWithAggregatesFilter<"CategorieActivite"> | boolean
    couleur?: StringWithAggregatesFilter<"CategorieActivite"> | string
    avec_notification?: BoolWithAggregatesFilter<"CategorieActivite"> | boolean
    is_supprime?: BoolWithAggregatesFilter<"CategorieActivite"> | boolean
    imageId?: IntNullableWithAggregatesFilter<"CategorieActivite"> | number | null
  }

  export type ActiviteWhereInput = {
    AND?: ActiviteWhereInput | ActiviteWhereInput[]
    OR?: ActiviteWhereInput[]
    NOT?: ActiviteWhereInput | ActiviteWhereInput[]
    id?: IntFilter<"Activite"> | number
    titre?: StringFilter<"Activite"> | string
    contenu?: StringFilter<"Activite"> | string
    date_heure_debut?: DateTimeFilter<"Activite"> | Date | string
    date_heure_fin?: DateTimeFilter<"Activite"> | Date | string
    categorieId?: IntFilter<"Activite"> | number
    categorie?: XOR<CategorieActiviteScalarRelationFilter, CategorieActiviteWhereInput>
    participants?: MembreActiviteListRelationFilter
  }

  export type ActiviteOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    date_heure_debut?: SortOrder
    date_heure_fin?: SortOrder
    categorieId?: SortOrder
    categorie?: CategorieActiviteOrderByWithRelationInput
    participants?: MembreActiviteOrderByRelationAggregateInput
  }

  export type ActiviteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActiviteWhereInput | ActiviteWhereInput[]
    OR?: ActiviteWhereInput[]
    NOT?: ActiviteWhereInput | ActiviteWhereInput[]
    titre?: StringFilter<"Activite"> | string
    contenu?: StringFilter<"Activite"> | string
    date_heure_debut?: DateTimeFilter<"Activite"> | Date | string
    date_heure_fin?: DateTimeFilter<"Activite"> | Date | string
    categorieId?: IntFilter<"Activite"> | number
    categorie?: XOR<CategorieActiviteScalarRelationFilter, CategorieActiviteWhereInput>
    participants?: MembreActiviteListRelationFilter
  }, "id">

  export type ActiviteOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    date_heure_debut?: SortOrder
    date_heure_fin?: SortOrder
    categorieId?: SortOrder
    _count?: ActiviteCountOrderByAggregateInput
    _avg?: ActiviteAvgOrderByAggregateInput
    _max?: ActiviteMaxOrderByAggregateInput
    _min?: ActiviteMinOrderByAggregateInput
    _sum?: ActiviteSumOrderByAggregateInput
  }

  export type ActiviteScalarWhereWithAggregatesInput = {
    AND?: ActiviteScalarWhereWithAggregatesInput | ActiviteScalarWhereWithAggregatesInput[]
    OR?: ActiviteScalarWhereWithAggregatesInput[]
    NOT?: ActiviteScalarWhereWithAggregatesInput | ActiviteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Activite"> | number
    titre?: StringWithAggregatesFilter<"Activite"> | string
    contenu?: StringWithAggregatesFilter<"Activite"> | string
    date_heure_debut?: DateTimeWithAggregatesFilter<"Activite"> | Date | string
    date_heure_fin?: DateTimeWithAggregatesFilter<"Activite"> | Date | string
    categorieId?: IntWithAggregatesFilter<"Activite"> | number
  }

  export type MembreActiviteWhereInput = {
    AND?: MembreActiviteWhereInput | MembreActiviteWhereInput[]
    OR?: MembreActiviteWhereInput[]
    NOT?: MembreActiviteWhereInput | MembreActiviteWhereInput[]
    id?: IntFilter<"MembreActivite"> | number
    observations?: StringNullableFilter<"MembreActivite"> | string | null
    dateInscription?: DateTimeFilter<"MembreActivite"> | Date | string
    membreId?: IntFilter<"MembreActivite"> | number
    activiteId?: IntFilter<"MembreActivite"> | number
    membre?: XOR<MembreScalarRelationFilter, MembreWhereInput>
    activite?: XOR<ActiviteScalarRelationFilter, ActiviteWhereInput>
  }

  export type MembreActiviteOrderByWithRelationInput = {
    id?: SortOrder
    observations?: SortOrderInput | SortOrder
    dateInscription?: SortOrder
    membreId?: SortOrder
    activiteId?: SortOrder
    membre?: MembreOrderByWithRelationInput
    activite?: ActiviteOrderByWithRelationInput
  }

  export type MembreActiviteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MembreActiviteWhereInput | MembreActiviteWhereInput[]
    OR?: MembreActiviteWhereInput[]
    NOT?: MembreActiviteWhereInput | MembreActiviteWhereInput[]
    observations?: StringNullableFilter<"MembreActivite"> | string | null
    dateInscription?: DateTimeFilter<"MembreActivite"> | Date | string
    membreId?: IntFilter<"MembreActivite"> | number
    activiteId?: IntFilter<"MembreActivite"> | number
    membre?: XOR<MembreScalarRelationFilter, MembreWhereInput>
    activite?: XOR<ActiviteScalarRelationFilter, ActiviteWhereInput>
  }, "id">

  export type MembreActiviteOrderByWithAggregationInput = {
    id?: SortOrder
    observations?: SortOrderInput | SortOrder
    dateInscription?: SortOrder
    membreId?: SortOrder
    activiteId?: SortOrder
    _count?: MembreActiviteCountOrderByAggregateInput
    _avg?: MembreActiviteAvgOrderByAggregateInput
    _max?: MembreActiviteMaxOrderByAggregateInput
    _min?: MembreActiviteMinOrderByAggregateInput
    _sum?: MembreActiviteSumOrderByAggregateInput
  }

  export type MembreActiviteScalarWhereWithAggregatesInput = {
    AND?: MembreActiviteScalarWhereWithAggregatesInput | MembreActiviteScalarWhereWithAggregatesInput[]
    OR?: MembreActiviteScalarWhereWithAggregatesInput[]
    NOT?: MembreActiviteScalarWhereWithAggregatesInput | MembreActiviteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MembreActivite"> | number
    observations?: StringNullableWithAggregatesFilter<"MembreActivite"> | string | null
    dateInscription?: DateTimeWithAggregatesFilter<"MembreActivite"> | Date | string
    membreId?: IntWithAggregatesFilter<"MembreActivite"> | number
    activiteId?: IntWithAggregatesFilter<"MembreActivite"> | number
  }

  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: IntFilter<"Article"> | number
    titre?: StringFilter<"Article"> | string
    contenu?: StringFilter<"Article"> | string
    statut?: EnumStatutArticleTypesFilter<"Article"> | $Enums.StatutArticleTypes
    categorie?: EnumCategorieArticleTypesFilter<"Article"> | $Enums.CategorieArticleTypes
    imageId?: IntNullableFilter<"Article"> | number | null
    redacteurId?: IntFilter<"Article"> | number
    image?: XOR<FichierNullableScalarRelationFilter, FichierWhereInput> | null
    redacteur?: XOR<MembreScalarRelationFilter, MembreWhereInput>
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    statut?: SortOrder
    categorie?: SortOrder
    imageId?: SortOrderInput | SortOrder
    redacteurId?: SortOrder
    image?: FichierOrderByWithRelationInput
    redacteur?: MembreOrderByWithRelationInput
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    titre?: StringFilter<"Article"> | string
    contenu?: StringFilter<"Article"> | string
    statut?: EnumStatutArticleTypesFilter<"Article"> | $Enums.StatutArticleTypes
    categorie?: EnumCategorieArticleTypesFilter<"Article"> | $Enums.CategorieArticleTypes
    imageId?: IntNullableFilter<"Article"> | number | null
    redacteurId?: IntFilter<"Article"> | number
    image?: XOR<FichierNullableScalarRelationFilter, FichierWhereInput> | null
    redacteur?: XOR<MembreScalarRelationFilter, MembreWhereInput>
  }, "id">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    statut?: SortOrder
    categorie?: SortOrder
    imageId?: SortOrderInput | SortOrder
    redacteurId?: SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _avg?: ArticleAvgOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
    _sum?: ArticleSumOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Article"> | number
    titre?: StringWithAggregatesFilter<"Article"> | string
    contenu?: StringWithAggregatesFilter<"Article"> | string
    statut?: EnumStatutArticleTypesWithAggregatesFilter<"Article"> | $Enums.StatutArticleTypes
    categorie?: EnumCategorieArticleTypesWithAggregatesFilter<"Article"> | $Enums.CategorieArticleTypes
    imageId?: IntNullableWithAggregatesFilter<"Article"> | number | null
    redacteurId?: IntWithAggregatesFilter<"Article"> | number
  }

  export type FichierCreateInput = {
    nom: string
    url: string
    type?: $Enums.FileTypes
    mime: string
    taille: string
    dateCreation?: Date | string
    dateMaj?: Date | string
    articles?: ArticleCreateNestedManyWithoutImageInput
    categoriesActivites?: CategorieActiviteCreateNestedManyWithoutImageInput
    profils?: ProfilCreateNestedManyWithoutAvatarInput
  }

  export type FichierUncheckedCreateInput = {
    id?: number
    nom: string
    url: string
    type?: $Enums.FileTypes
    mime: string
    taille: string
    dateCreation?: Date | string
    dateMaj?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutImageInput
    categoriesActivites?: CategorieActiviteUncheckedCreateNestedManyWithoutImageInput
    profils?: ProfilUncheckedCreateNestedManyWithoutAvatarInput
  }

  export type FichierUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumFileTypesFieldUpdateOperationsInput | $Enums.FileTypes
    mime?: StringFieldUpdateOperationsInput | string
    taille?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMaj?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutImageNestedInput
    categoriesActivites?: CategorieActiviteUpdateManyWithoutImageNestedInput
    profils?: ProfilUpdateManyWithoutAvatarNestedInput
  }

  export type FichierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumFileTypesFieldUpdateOperationsInput | $Enums.FileTypes
    mime?: StringFieldUpdateOperationsInput | string
    taille?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMaj?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutImageNestedInput
    categoriesActivites?: CategorieActiviteUncheckedUpdateManyWithoutImageNestedInput
    profils?: ProfilUncheckedUpdateManyWithoutAvatarNestedInput
  }

  export type FichierCreateManyInput = {
    id?: number
    nom: string
    url: string
    type?: $Enums.FileTypes
    mime: string
    taille: string
    dateCreation?: Date | string
    dateMaj?: Date | string
  }

  export type FichierUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumFileTypesFieldUpdateOperationsInput | $Enums.FileTypes
    mime?: StringFieldUpdateOperationsInput | string
    taille?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMaj?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FichierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumFileTypesFieldUpdateOperationsInput | $Enums.FileTypes
    mime?: StringFieldUpdateOperationsInput | string
    taille?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMaj?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembreCreateInput = {
    email: string
    mot_de_passe: string
    est_supprime?: boolean
    role?: $Enums.RoleTypes
    inscriptions?: MembreActiviteCreateNestedManyWithoutMembreInput
    profil?: ProfilCreateNestedOneWithoutMembreInput
    articles?: ArticleCreateNestedManyWithoutRedacteurInput
  }

  export type MembreUncheckedCreateInput = {
    id?: number
    email: string
    mot_de_passe: string
    est_supprime?: boolean
    role?: $Enums.RoleTypes
    inscriptions?: MembreActiviteUncheckedCreateNestedManyWithoutMembreInput
    profil?: ProfilUncheckedCreateNestedOneWithoutMembreInput
    articles?: ArticleUncheckedCreateNestedManyWithoutRedacteurInput
  }

  export type MembreUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    est_supprime?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleTypesFieldUpdateOperationsInput | $Enums.RoleTypes
    inscriptions?: MembreActiviteUpdateManyWithoutMembreNestedInput
    profil?: ProfilUpdateOneWithoutMembreNestedInput
    articles?: ArticleUpdateManyWithoutRedacteurNestedInput
  }

  export type MembreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    est_supprime?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleTypesFieldUpdateOperationsInput | $Enums.RoleTypes
    inscriptions?: MembreActiviteUncheckedUpdateManyWithoutMembreNestedInput
    profil?: ProfilUncheckedUpdateOneWithoutMembreNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutRedacteurNestedInput
  }

  export type MembreCreateManyInput = {
    id?: number
    email: string
    mot_de_passe: string
    est_supprime?: boolean
    role?: $Enums.RoleTypes
  }

  export type MembreUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    est_supprime?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleTypesFieldUpdateOperationsInput | $Enums.RoleTypes
  }

  export type MembreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    est_supprime?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleTypesFieldUpdateOperationsInput | $Enums.RoleTypes
  }

  export type ProfilCreateInput = {
    nom: string
    prenom: string
    telephone?: string | null
    communication_mail?: boolean
    communication_sms?: boolean
    avatar?: FichierCreateNestedOneWithoutProfilsInput
    membre: MembreCreateNestedOneWithoutProfilInput
  }

  export type ProfilUncheckedCreateInput = {
    id?: number
    nom: string
    prenom: string
    telephone?: string | null
    communication_mail?: boolean
    communication_sms?: boolean
    avatarId?: number | null
    membreId: number
  }

  export type ProfilUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    communication_mail?: BoolFieldUpdateOperationsInput | boolean
    communication_sms?: BoolFieldUpdateOperationsInput | boolean
    avatar?: FichierUpdateOneWithoutProfilsNestedInput
    membre?: MembreUpdateOneRequiredWithoutProfilNestedInput
  }

  export type ProfilUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    communication_mail?: BoolFieldUpdateOperationsInput | boolean
    communication_sms?: BoolFieldUpdateOperationsInput | boolean
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    membreId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfilCreateManyInput = {
    id?: number
    nom: string
    prenom: string
    telephone?: string | null
    communication_mail?: boolean
    communication_sms?: boolean
    avatarId?: number | null
    membreId: number
  }

  export type ProfilUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    communication_mail?: BoolFieldUpdateOperationsInput | boolean
    communication_sms?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProfilUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    communication_mail?: BoolFieldUpdateOperationsInput | boolean
    communication_sms?: BoolFieldUpdateOperationsInput | boolean
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    membreId?: IntFieldUpdateOperationsInput | number
  }

  export type CategorieActiviteCreateInput = {
    lbl_categorie: string
    avec_equipement?: boolean
    couleur: string
    avec_notification?: boolean
    is_supprime?: boolean
    image?: FichierCreateNestedOneWithoutCategoriesActivitesInput
    activites?: ActiviteCreateNestedManyWithoutCategorieInput
  }

  export type CategorieActiviteUncheckedCreateInput = {
    id?: number
    lbl_categorie: string
    avec_equipement?: boolean
    couleur: string
    avec_notification?: boolean
    is_supprime?: boolean
    imageId?: number | null
    activites?: ActiviteUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type CategorieActiviteUpdateInput = {
    lbl_categorie?: StringFieldUpdateOperationsInput | string
    avec_equipement?: BoolFieldUpdateOperationsInput | boolean
    couleur?: StringFieldUpdateOperationsInput | string
    avec_notification?: BoolFieldUpdateOperationsInput | boolean
    is_supprime?: BoolFieldUpdateOperationsInput | boolean
    image?: FichierUpdateOneWithoutCategoriesActivitesNestedInput
    activites?: ActiviteUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieActiviteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lbl_categorie?: StringFieldUpdateOperationsInput | string
    avec_equipement?: BoolFieldUpdateOperationsInput | boolean
    couleur?: StringFieldUpdateOperationsInput | string
    avec_notification?: BoolFieldUpdateOperationsInput | boolean
    is_supprime?: BoolFieldUpdateOperationsInput | boolean
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    activites?: ActiviteUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieActiviteCreateManyInput = {
    id?: number
    lbl_categorie: string
    avec_equipement?: boolean
    couleur: string
    avec_notification?: boolean
    is_supprime?: boolean
    imageId?: number | null
  }

  export type CategorieActiviteUpdateManyMutationInput = {
    lbl_categorie?: StringFieldUpdateOperationsInput | string
    avec_equipement?: BoolFieldUpdateOperationsInput | boolean
    couleur?: StringFieldUpdateOperationsInput | string
    avec_notification?: BoolFieldUpdateOperationsInput | boolean
    is_supprime?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategorieActiviteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lbl_categorie?: StringFieldUpdateOperationsInput | string
    avec_equipement?: BoolFieldUpdateOperationsInput | boolean
    couleur?: StringFieldUpdateOperationsInput | string
    avec_notification?: BoolFieldUpdateOperationsInput | boolean
    is_supprime?: BoolFieldUpdateOperationsInput | boolean
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ActiviteCreateInput = {
    titre: string
    contenu: string
    date_heure_debut: Date | string
    date_heure_fin: Date | string
    categorie: CategorieActiviteCreateNestedOneWithoutActivitesInput
    participants?: MembreActiviteCreateNestedManyWithoutActiviteInput
  }

  export type ActiviteUncheckedCreateInput = {
    id?: number
    titre: string
    contenu: string
    date_heure_debut: Date | string
    date_heure_fin: Date | string
    categorieId: number
    participants?: MembreActiviteUncheckedCreateNestedManyWithoutActiviteInput
  }

  export type ActiviteUpdateInput = {
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    date_heure_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_heure_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    categorie?: CategorieActiviteUpdateOneRequiredWithoutActivitesNestedInput
    participants?: MembreActiviteUpdateManyWithoutActiviteNestedInput
  }

  export type ActiviteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    date_heure_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_heure_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    categorieId?: IntFieldUpdateOperationsInput | number
    participants?: MembreActiviteUncheckedUpdateManyWithoutActiviteNestedInput
  }

  export type ActiviteCreateManyInput = {
    id?: number
    titre: string
    contenu: string
    date_heure_debut: Date | string
    date_heure_fin: Date | string
    categorieId: number
  }

  export type ActiviteUpdateManyMutationInput = {
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    date_heure_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_heure_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiviteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    date_heure_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_heure_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    categorieId?: IntFieldUpdateOperationsInput | number
  }

  export type MembreActiviteCreateInput = {
    observations?: string | null
    dateInscription?: Date | string
    membre: MembreCreateNestedOneWithoutInscriptionsInput
    activite: ActiviteCreateNestedOneWithoutParticipantsInput
  }

  export type MembreActiviteUncheckedCreateInput = {
    id?: number
    observations?: string | null
    dateInscription?: Date | string
    membreId: number
    activiteId: number
  }

  export type MembreActiviteUpdateInput = {
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    membre?: MembreUpdateOneRequiredWithoutInscriptionsNestedInput
    activite?: ActiviteUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type MembreActiviteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    membreId?: IntFieldUpdateOperationsInput | number
    activiteId?: IntFieldUpdateOperationsInput | number
  }

  export type MembreActiviteCreateManyInput = {
    id?: number
    observations?: string | null
    dateInscription?: Date | string
    membreId: number
    activiteId: number
  }

  export type MembreActiviteUpdateManyMutationInput = {
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembreActiviteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    membreId?: IntFieldUpdateOperationsInput | number
    activiteId?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleCreateInput = {
    titre: string
    contenu: string
    statut: $Enums.StatutArticleTypes
    categorie: $Enums.CategorieArticleTypes
    image?: FichierCreateNestedOneWithoutArticlesInput
    redacteur: MembreCreateNestedOneWithoutArticlesInput
  }

  export type ArticleUncheckedCreateInput = {
    id?: number
    titre: string
    contenu: string
    statut: $Enums.StatutArticleTypes
    categorie: $Enums.CategorieArticleTypes
    imageId?: number | null
    redacteurId: number
  }

  export type ArticleUpdateInput = {
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutArticleTypesFieldUpdateOperationsInput | $Enums.StatutArticleTypes
    categorie?: EnumCategorieArticleTypesFieldUpdateOperationsInput | $Enums.CategorieArticleTypes
    image?: FichierUpdateOneWithoutArticlesNestedInput
    redacteur?: MembreUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutArticleTypesFieldUpdateOperationsInput | $Enums.StatutArticleTypes
    categorie?: EnumCategorieArticleTypesFieldUpdateOperationsInput | $Enums.CategorieArticleTypes
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    redacteurId?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleCreateManyInput = {
    id?: number
    titre: string
    contenu: string
    statut: $Enums.StatutArticleTypes
    categorie: $Enums.CategorieArticleTypes
    imageId?: number | null
    redacteurId: number
  }

  export type ArticleUpdateManyMutationInput = {
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutArticleTypesFieldUpdateOperationsInput | $Enums.StatutArticleTypes
    categorie?: EnumCategorieArticleTypesFieldUpdateOperationsInput | $Enums.CategorieArticleTypes
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutArticleTypesFieldUpdateOperationsInput | $Enums.StatutArticleTypes
    categorie?: EnumCategorieArticleTypesFieldUpdateOperationsInput | $Enums.CategorieArticleTypes
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    redacteurId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumFileTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileTypes | EnumFileTypesFieldRefInput<$PrismaModel>
    in?: $Enums.FileTypes[] | ListEnumFileTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileTypes[] | ListEnumFileTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypesFilter<$PrismaModel> | $Enums.FileTypes
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ArticleListRelationFilter = {
    every?: ArticleWhereInput
    some?: ArticleWhereInput
    none?: ArticleWhereInput
  }

  export type CategorieActiviteListRelationFilter = {
    every?: CategorieActiviteWhereInput
    some?: CategorieActiviteWhereInput
    none?: CategorieActiviteWhereInput
  }

  export type ProfilListRelationFilter = {
    every?: ProfilWhereInput
    some?: ProfilWhereInput
    none?: ProfilWhereInput
  }

  export type ArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategorieActiviteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfilOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FichierCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    url?: SortOrder
    type?: SortOrder
    mime?: SortOrder
    taille?: SortOrder
    dateCreation?: SortOrder
    dateMaj?: SortOrder
  }

  export type FichierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FichierMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    url?: SortOrder
    type?: SortOrder
    mime?: SortOrder
    taille?: SortOrder
    dateCreation?: SortOrder
    dateMaj?: SortOrder
  }

  export type FichierMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    url?: SortOrder
    type?: SortOrder
    mime?: SortOrder
    taille?: SortOrder
    dateCreation?: SortOrder
    dateMaj?: SortOrder
  }

  export type FichierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumFileTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileTypes | EnumFileTypesFieldRefInput<$PrismaModel>
    in?: $Enums.FileTypes[] | ListEnumFileTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileTypes[] | ListEnumFileTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypesWithAggregatesFilter<$PrismaModel> | $Enums.FileTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileTypesFilter<$PrismaModel>
    _max?: NestedEnumFileTypesFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleTypes | EnumRoleTypesFieldRefInput<$PrismaModel>
    in?: $Enums.RoleTypes[] | ListEnumRoleTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleTypes[] | ListEnumRoleTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypesFilter<$PrismaModel> | $Enums.RoleTypes
  }

  export type MembreActiviteListRelationFilter = {
    every?: MembreActiviteWhereInput
    some?: MembreActiviteWhereInput
    none?: MembreActiviteWhereInput
  }

  export type ProfilNullableScalarRelationFilter = {
    is?: ProfilWhereInput | null
    isNot?: ProfilWhereInput | null
  }

  export type MembreActiviteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MembreCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    mot_de_passe?: SortOrder
    est_supprime?: SortOrder
    role?: SortOrder
  }

  export type MembreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MembreMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    mot_de_passe?: SortOrder
    est_supprime?: SortOrder
    role?: SortOrder
  }

  export type MembreMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    mot_de_passe?: SortOrder
    est_supprime?: SortOrder
    role?: SortOrder
  }

  export type MembreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleTypes | EnumRoleTypesFieldRefInput<$PrismaModel>
    in?: $Enums.RoleTypes[] | ListEnumRoleTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleTypes[] | ListEnumRoleTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypesWithAggregatesFilter<$PrismaModel> | $Enums.RoleTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleTypesFilter<$PrismaModel>
    _max?: NestedEnumRoleTypesFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FichierNullableScalarRelationFilter = {
    is?: FichierWhereInput | null
    isNot?: FichierWhereInput | null
  }

  export type MembreScalarRelationFilter = {
    is?: MembreWhereInput
    isNot?: MembreWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfilCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    communication_mail?: SortOrder
    communication_sms?: SortOrder
    avatarId?: SortOrder
    membreId?: SortOrder
  }

  export type ProfilAvgOrderByAggregateInput = {
    id?: SortOrder
    avatarId?: SortOrder
    membreId?: SortOrder
  }

  export type ProfilMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    communication_mail?: SortOrder
    communication_sms?: SortOrder
    avatarId?: SortOrder
    membreId?: SortOrder
  }

  export type ProfilMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    communication_mail?: SortOrder
    communication_sms?: SortOrder
    avatarId?: SortOrder
    membreId?: SortOrder
  }

  export type ProfilSumOrderByAggregateInput = {
    id?: SortOrder
    avatarId?: SortOrder
    membreId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ActiviteListRelationFilter = {
    every?: ActiviteWhereInput
    some?: ActiviteWhereInput
    none?: ActiviteWhereInput
  }

  export type ActiviteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategorieActiviteCountOrderByAggregateInput = {
    id?: SortOrder
    lbl_categorie?: SortOrder
    avec_equipement?: SortOrder
    couleur?: SortOrder
    avec_notification?: SortOrder
    is_supprime?: SortOrder
    imageId?: SortOrder
  }

  export type CategorieActiviteAvgOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
  }

  export type CategorieActiviteMaxOrderByAggregateInput = {
    id?: SortOrder
    lbl_categorie?: SortOrder
    avec_equipement?: SortOrder
    couleur?: SortOrder
    avec_notification?: SortOrder
    is_supprime?: SortOrder
    imageId?: SortOrder
  }

  export type CategorieActiviteMinOrderByAggregateInput = {
    id?: SortOrder
    lbl_categorie?: SortOrder
    avec_equipement?: SortOrder
    couleur?: SortOrder
    avec_notification?: SortOrder
    is_supprime?: SortOrder
    imageId?: SortOrder
  }

  export type CategorieActiviteSumOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
  }

  export type CategorieActiviteScalarRelationFilter = {
    is?: CategorieActiviteWhereInput
    isNot?: CategorieActiviteWhereInput
  }

  export type ActiviteCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    date_heure_debut?: SortOrder
    date_heure_fin?: SortOrder
    categorieId?: SortOrder
  }

  export type ActiviteAvgOrderByAggregateInput = {
    id?: SortOrder
    categorieId?: SortOrder
  }

  export type ActiviteMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    date_heure_debut?: SortOrder
    date_heure_fin?: SortOrder
    categorieId?: SortOrder
  }

  export type ActiviteMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    date_heure_debut?: SortOrder
    date_heure_fin?: SortOrder
    categorieId?: SortOrder
  }

  export type ActiviteSumOrderByAggregateInput = {
    id?: SortOrder
    categorieId?: SortOrder
  }

  export type ActiviteScalarRelationFilter = {
    is?: ActiviteWhereInput
    isNot?: ActiviteWhereInput
  }

  export type MembreActiviteCountOrderByAggregateInput = {
    id?: SortOrder
    observations?: SortOrder
    dateInscription?: SortOrder
    membreId?: SortOrder
    activiteId?: SortOrder
  }

  export type MembreActiviteAvgOrderByAggregateInput = {
    id?: SortOrder
    membreId?: SortOrder
    activiteId?: SortOrder
  }

  export type MembreActiviteMaxOrderByAggregateInput = {
    id?: SortOrder
    observations?: SortOrder
    dateInscription?: SortOrder
    membreId?: SortOrder
    activiteId?: SortOrder
  }

  export type MembreActiviteMinOrderByAggregateInput = {
    id?: SortOrder
    observations?: SortOrder
    dateInscription?: SortOrder
    membreId?: SortOrder
    activiteId?: SortOrder
  }

  export type MembreActiviteSumOrderByAggregateInput = {
    id?: SortOrder
    membreId?: SortOrder
    activiteId?: SortOrder
  }

  export type EnumStatutArticleTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutArticleTypes | EnumStatutArticleTypesFieldRefInput<$PrismaModel>
    in?: $Enums.StatutArticleTypes[] | ListEnumStatutArticleTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutArticleTypes[] | ListEnumStatutArticleTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutArticleTypesFilter<$PrismaModel> | $Enums.StatutArticleTypes
  }

  export type EnumCategorieArticleTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategorieArticleTypes | EnumCategorieArticleTypesFieldRefInput<$PrismaModel>
    in?: $Enums.CategorieArticleTypes[] | ListEnumCategorieArticleTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategorieArticleTypes[] | ListEnumCategorieArticleTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumCategorieArticleTypesFilter<$PrismaModel> | $Enums.CategorieArticleTypes
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    statut?: SortOrder
    categorie?: SortOrder
    imageId?: SortOrder
    redacteurId?: SortOrder
  }

  export type ArticleAvgOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    redacteurId?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    statut?: SortOrder
    categorie?: SortOrder
    imageId?: SortOrder
    redacteurId?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    statut?: SortOrder
    categorie?: SortOrder
    imageId?: SortOrder
    redacteurId?: SortOrder
  }

  export type ArticleSumOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    redacteurId?: SortOrder
  }

  export type EnumStatutArticleTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutArticleTypes | EnumStatutArticleTypesFieldRefInput<$PrismaModel>
    in?: $Enums.StatutArticleTypes[] | ListEnumStatutArticleTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutArticleTypes[] | ListEnumStatutArticleTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutArticleTypesWithAggregatesFilter<$PrismaModel> | $Enums.StatutArticleTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutArticleTypesFilter<$PrismaModel>
    _max?: NestedEnumStatutArticleTypesFilter<$PrismaModel>
  }

  export type EnumCategorieArticleTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategorieArticleTypes | EnumCategorieArticleTypesFieldRefInput<$PrismaModel>
    in?: $Enums.CategorieArticleTypes[] | ListEnumCategorieArticleTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategorieArticleTypes[] | ListEnumCategorieArticleTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumCategorieArticleTypesWithAggregatesFilter<$PrismaModel> | $Enums.CategorieArticleTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategorieArticleTypesFilter<$PrismaModel>
    _max?: NestedEnumCategorieArticleTypesFilter<$PrismaModel>
  }

  export type ArticleCreateNestedManyWithoutImageInput = {
    create?: XOR<ArticleCreateWithoutImageInput, ArticleUncheckedCreateWithoutImageInput> | ArticleCreateWithoutImageInput[] | ArticleUncheckedCreateWithoutImageInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutImageInput | ArticleCreateOrConnectWithoutImageInput[]
    createMany?: ArticleCreateManyImageInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type CategorieActiviteCreateNestedManyWithoutImageInput = {
    create?: XOR<CategorieActiviteCreateWithoutImageInput, CategorieActiviteUncheckedCreateWithoutImageInput> | CategorieActiviteCreateWithoutImageInput[] | CategorieActiviteUncheckedCreateWithoutImageInput[]
    connectOrCreate?: CategorieActiviteCreateOrConnectWithoutImageInput | CategorieActiviteCreateOrConnectWithoutImageInput[]
    createMany?: CategorieActiviteCreateManyImageInputEnvelope
    connect?: CategorieActiviteWhereUniqueInput | CategorieActiviteWhereUniqueInput[]
  }

  export type ProfilCreateNestedManyWithoutAvatarInput = {
    create?: XOR<ProfilCreateWithoutAvatarInput, ProfilUncheckedCreateWithoutAvatarInput> | ProfilCreateWithoutAvatarInput[] | ProfilUncheckedCreateWithoutAvatarInput[]
    connectOrCreate?: ProfilCreateOrConnectWithoutAvatarInput | ProfilCreateOrConnectWithoutAvatarInput[]
    createMany?: ProfilCreateManyAvatarInputEnvelope
    connect?: ProfilWhereUniqueInput | ProfilWhereUniqueInput[]
  }

  export type ArticleUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<ArticleCreateWithoutImageInput, ArticleUncheckedCreateWithoutImageInput> | ArticleCreateWithoutImageInput[] | ArticleUncheckedCreateWithoutImageInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutImageInput | ArticleCreateOrConnectWithoutImageInput[]
    createMany?: ArticleCreateManyImageInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type CategorieActiviteUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<CategorieActiviteCreateWithoutImageInput, CategorieActiviteUncheckedCreateWithoutImageInput> | CategorieActiviteCreateWithoutImageInput[] | CategorieActiviteUncheckedCreateWithoutImageInput[]
    connectOrCreate?: CategorieActiviteCreateOrConnectWithoutImageInput | CategorieActiviteCreateOrConnectWithoutImageInput[]
    createMany?: CategorieActiviteCreateManyImageInputEnvelope
    connect?: CategorieActiviteWhereUniqueInput | CategorieActiviteWhereUniqueInput[]
  }

  export type ProfilUncheckedCreateNestedManyWithoutAvatarInput = {
    create?: XOR<ProfilCreateWithoutAvatarInput, ProfilUncheckedCreateWithoutAvatarInput> | ProfilCreateWithoutAvatarInput[] | ProfilUncheckedCreateWithoutAvatarInput[]
    connectOrCreate?: ProfilCreateOrConnectWithoutAvatarInput | ProfilCreateOrConnectWithoutAvatarInput[]
    createMany?: ProfilCreateManyAvatarInputEnvelope
    connect?: ProfilWhereUniqueInput | ProfilWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumFileTypesFieldUpdateOperationsInput = {
    set?: $Enums.FileTypes
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ArticleUpdateManyWithoutImageNestedInput = {
    create?: XOR<ArticleCreateWithoutImageInput, ArticleUncheckedCreateWithoutImageInput> | ArticleCreateWithoutImageInput[] | ArticleUncheckedCreateWithoutImageInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutImageInput | ArticleCreateOrConnectWithoutImageInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutImageInput | ArticleUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: ArticleCreateManyImageInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutImageInput | ArticleUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutImageInput | ArticleUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type CategorieActiviteUpdateManyWithoutImageNestedInput = {
    create?: XOR<CategorieActiviteCreateWithoutImageInput, CategorieActiviteUncheckedCreateWithoutImageInput> | CategorieActiviteCreateWithoutImageInput[] | CategorieActiviteUncheckedCreateWithoutImageInput[]
    connectOrCreate?: CategorieActiviteCreateOrConnectWithoutImageInput | CategorieActiviteCreateOrConnectWithoutImageInput[]
    upsert?: CategorieActiviteUpsertWithWhereUniqueWithoutImageInput | CategorieActiviteUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: CategorieActiviteCreateManyImageInputEnvelope
    set?: CategorieActiviteWhereUniqueInput | CategorieActiviteWhereUniqueInput[]
    disconnect?: CategorieActiviteWhereUniqueInput | CategorieActiviteWhereUniqueInput[]
    delete?: CategorieActiviteWhereUniqueInput | CategorieActiviteWhereUniqueInput[]
    connect?: CategorieActiviteWhereUniqueInput | CategorieActiviteWhereUniqueInput[]
    update?: CategorieActiviteUpdateWithWhereUniqueWithoutImageInput | CategorieActiviteUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: CategorieActiviteUpdateManyWithWhereWithoutImageInput | CategorieActiviteUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: CategorieActiviteScalarWhereInput | CategorieActiviteScalarWhereInput[]
  }

  export type ProfilUpdateManyWithoutAvatarNestedInput = {
    create?: XOR<ProfilCreateWithoutAvatarInput, ProfilUncheckedCreateWithoutAvatarInput> | ProfilCreateWithoutAvatarInput[] | ProfilUncheckedCreateWithoutAvatarInput[]
    connectOrCreate?: ProfilCreateOrConnectWithoutAvatarInput | ProfilCreateOrConnectWithoutAvatarInput[]
    upsert?: ProfilUpsertWithWhereUniqueWithoutAvatarInput | ProfilUpsertWithWhereUniqueWithoutAvatarInput[]
    createMany?: ProfilCreateManyAvatarInputEnvelope
    set?: ProfilWhereUniqueInput | ProfilWhereUniqueInput[]
    disconnect?: ProfilWhereUniqueInput | ProfilWhereUniqueInput[]
    delete?: ProfilWhereUniqueInput | ProfilWhereUniqueInput[]
    connect?: ProfilWhereUniqueInput | ProfilWhereUniqueInput[]
    update?: ProfilUpdateWithWhereUniqueWithoutAvatarInput | ProfilUpdateWithWhereUniqueWithoutAvatarInput[]
    updateMany?: ProfilUpdateManyWithWhereWithoutAvatarInput | ProfilUpdateManyWithWhereWithoutAvatarInput[]
    deleteMany?: ProfilScalarWhereInput | ProfilScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArticleUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<ArticleCreateWithoutImageInput, ArticleUncheckedCreateWithoutImageInput> | ArticleCreateWithoutImageInput[] | ArticleUncheckedCreateWithoutImageInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutImageInput | ArticleCreateOrConnectWithoutImageInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutImageInput | ArticleUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: ArticleCreateManyImageInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutImageInput | ArticleUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutImageInput | ArticleUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type CategorieActiviteUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<CategorieActiviteCreateWithoutImageInput, CategorieActiviteUncheckedCreateWithoutImageInput> | CategorieActiviteCreateWithoutImageInput[] | CategorieActiviteUncheckedCreateWithoutImageInput[]
    connectOrCreate?: CategorieActiviteCreateOrConnectWithoutImageInput | CategorieActiviteCreateOrConnectWithoutImageInput[]
    upsert?: CategorieActiviteUpsertWithWhereUniqueWithoutImageInput | CategorieActiviteUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: CategorieActiviteCreateManyImageInputEnvelope
    set?: CategorieActiviteWhereUniqueInput | CategorieActiviteWhereUniqueInput[]
    disconnect?: CategorieActiviteWhereUniqueInput | CategorieActiviteWhereUniqueInput[]
    delete?: CategorieActiviteWhereUniqueInput | CategorieActiviteWhereUniqueInput[]
    connect?: CategorieActiviteWhereUniqueInput | CategorieActiviteWhereUniqueInput[]
    update?: CategorieActiviteUpdateWithWhereUniqueWithoutImageInput | CategorieActiviteUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: CategorieActiviteUpdateManyWithWhereWithoutImageInput | CategorieActiviteUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: CategorieActiviteScalarWhereInput | CategorieActiviteScalarWhereInput[]
  }

  export type ProfilUncheckedUpdateManyWithoutAvatarNestedInput = {
    create?: XOR<ProfilCreateWithoutAvatarInput, ProfilUncheckedCreateWithoutAvatarInput> | ProfilCreateWithoutAvatarInput[] | ProfilUncheckedCreateWithoutAvatarInput[]
    connectOrCreate?: ProfilCreateOrConnectWithoutAvatarInput | ProfilCreateOrConnectWithoutAvatarInput[]
    upsert?: ProfilUpsertWithWhereUniqueWithoutAvatarInput | ProfilUpsertWithWhereUniqueWithoutAvatarInput[]
    createMany?: ProfilCreateManyAvatarInputEnvelope
    set?: ProfilWhereUniqueInput | ProfilWhereUniqueInput[]
    disconnect?: ProfilWhereUniqueInput | ProfilWhereUniqueInput[]
    delete?: ProfilWhereUniqueInput | ProfilWhereUniqueInput[]
    connect?: ProfilWhereUniqueInput | ProfilWhereUniqueInput[]
    update?: ProfilUpdateWithWhereUniqueWithoutAvatarInput | ProfilUpdateWithWhereUniqueWithoutAvatarInput[]
    updateMany?: ProfilUpdateManyWithWhereWithoutAvatarInput | ProfilUpdateManyWithWhereWithoutAvatarInput[]
    deleteMany?: ProfilScalarWhereInput | ProfilScalarWhereInput[]
  }

  export type MembreActiviteCreateNestedManyWithoutMembreInput = {
    create?: XOR<MembreActiviteCreateWithoutMembreInput, MembreActiviteUncheckedCreateWithoutMembreInput> | MembreActiviteCreateWithoutMembreInput[] | MembreActiviteUncheckedCreateWithoutMembreInput[]
    connectOrCreate?: MembreActiviteCreateOrConnectWithoutMembreInput | MembreActiviteCreateOrConnectWithoutMembreInput[]
    createMany?: MembreActiviteCreateManyMembreInputEnvelope
    connect?: MembreActiviteWhereUniqueInput | MembreActiviteWhereUniqueInput[]
  }

  export type ProfilCreateNestedOneWithoutMembreInput = {
    create?: XOR<ProfilCreateWithoutMembreInput, ProfilUncheckedCreateWithoutMembreInput>
    connectOrCreate?: ProfilCreateOrConnectWithoutMembreInput
    connect?: ProfilWhereUniqueInput
  }

  export type ArticleCreateNestedManyWithoutRedacteurInput = {
    create?: XOR<ArticleCreateWithoutRedacteurInput, ArticleUncheckedCreateWithoutRedacteurInput> | ArticleCreateWithoutRedacteurInput[] | ArticleUncheckedCreateWithoutRedacteurInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutRedacteurInput | ArticleCreateOrConnectWithoutRedacteurInput[]
    createMany?: ArticleCreateManyRedacteurInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type MembreActiviteUncheckedCreateNestedManyWithoutMembreInput = {
    create?: XOR<MembreActiviteCreateWithoutMembreInput, MembreActiviteUncheckedCreateWithoutMembreInput> | MembreActiviteCreateWithoutMembreInput[] | MembreActiviteUncheckedCreateWithoutMembreInput[]
    connectOrCreate?: MembreActiviteCreateOrConnectWithoutMembreInput | MembreActiviteCreateOrConnectWithoutMembreInput[]
    createMany?: MembreActiviteCreateManyMembreInputEnvelope
    connect?: MembreActiviteWhereUniqueInput | MembreActiviteWhereUniqueInput[]
  }

  export type ProfilUncheckedCreateNestedOneWithoutMembreInput = {
    create?: XOR<ProfilCreateWithoutMembreInput, ProfilUncheckedCreateWithoutMembreInput>
    connectOrCreate?: ProfilCreateOrConnectWithoutMembreInput
    connect?: ProfilWhereUniqueInput
  }

  export type ArticleUncheckedCreateNestedManyWithoutRedacteurInput = {
    create?: XOR<ArticleCreateWithoutRedacteurInput, ArticleUncheckedCreateWithoutRedacteurInput> | ArticleCreateWithoutRedacteurInput[] | ArticleUncheckedCreateWithoutRedacteurInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutRedacteurInput | ArticleCreateOrConnectWithoutRedacteurInput[]
    createMany?: ArticleCreateManyRedacteurInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleTypesFieldUpdateOperationsInput = {
    set?: $Enums.RoleTypes
  }

  export type MembreActiviteUpdateManyWithoutMembreNestedInput = {
    create?: XOR<MembreActiviteCreateWithoutMembreInput, MembreActiviteUncheckedCreateWithoutMembreInput> | MembreActiviteCreateWithoutMembreInput[] | MembreActiviteUncheckedCreateWithoutMembreInput[]
    connectOrCreate?: MembreActiviteCreateOrConnectWithoutMembreInput | MembreActiviteCreateOrConnectWithoutMembreInput[]
    upsert?: MembreActiviteUpsertWithWhereUniqueWithoutMembreInput | MembreActiviteUpsertWithWhereUniqueWithoutMembreInput[]
    createMany?: MembreActiviteCreateManyMembreInputEnvelope
    set?: MembreActiviteWhereUniqueInput | MembreActiviteWhereUniqueInput[]
    disconnect?: MembreActiviteWhereUniqueInput | MembreActiviteWhereUniqueInput[]
    delete?: MembreActiviteWhereUniqueInput | MembreActiviteWhereUniqueInput[]
    connect?: MembreActiviteWhereUniqueInput | MembreActiviteWhereUniqueInput[]
    update?: MembreActiviteUpdateWithWhereUniqueWithoutMembreInput | MembreActiviteUpdateWithWhereUniqueWithoutMembreInput[]
    updateMany?: MembreActiviteUpdateManyWithWhereWithoutMembreInput | MembreActiviteUpdateManyWithWhereWithoutMembreInput[]
    deleteMany?: MembreActiviteScalarWhereInput | MembreActiviteScalarWhereInput[]
  }

  export type ProfilUpdateOneWithoutMembreNestedInput = {
    create?: XOR<ProfilCreateWithoutMembreInput, ProfilUncheckedCreateWithoutMembreInput>
    connectOrCreate?: ProfilCreateOrConnectWithoutMembreInput
    upsert?: ProfilUpsertWithoutMembreInput
    disconnect?: ProfilWhereInput | boolean
    delete?: ProfilWhereInput | boolean
    connect?: ProfilWhereUniqueInput
    update?: XOR<XOR<ProfilUpdateToOneWithWhereWithoutMembreInput, ProfilUpdateWithoutMembreInput>, ProfilUncheckedUpdateWithoutMembreInput>
  }

  export type ArticleUpdateManyWithoutRedacteurNestedInput = {
    create?: XOR<ArticleCreateWithoutRedacteurInput, ArticleUncheckedCreateWithoutRedacteurInput> | ArticleCreateWithoutRedacteurInput[] | ArticleUncheckedCreateWithoutRedacteurInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutRedacteurInput | ArticleCreateOrConnectWithoutRedacteurInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutRedacteurInput | ArticleUpsertWithWhereUniqueWithoutRedacteurInput[]
    createMany?: ArticleCreateManyRedacteurInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutRedacteurInput | ArticleUpdateWithWhereUniqueWithoutRedacteurInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutRedacteurInput | ArticleUpdateManyWithWhereWithoutRedacteurInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type MembreActiviteUncheckedUpdateManyWithoutMembreNestedInput = {
    create?: XOR<MembreActiviteCreateWithoutMembreInput, MembreActiviteUncheckedCreateWithoutMembreInput> | MembreActiviteCreateWithoutMembreInput[] | MembreActiviteUncheckedCreateWithoutMembreInput[]
    connectOrCreate?: MembreActiviteCreateOrConnectWithoutMembreInput | MembreActiviteCreateOrConnectWithoutMembreInput[]
    upsert?: MembreActiviteUpsertWithWhereUniqueWithoutMembreInput | MembreActiviteUpsertWithWhereUniqueWithoutMembreInput[]
    createMany?: MembreActiviteCreateManyMembreInputEnvelope
    set?: MembreActiviteWhereUniqueInput | MembreActiviteWhereUniqueInput[]
    disconnect?: MembreActiviteWhereUniqueInput | MembreActiviteWhereUniqueInput[]
    delete?: MembreActiviteWhereUniqueInput | MembreActiviteWhereUniqueInput[]
    connect?: MembreActiviteWhereUniqueInput | MembreActiviteWhereUniqueInput[]
    update?: MembreActiviteUpdateWithWhereUniqueWithoutMembreInput | MembreActiviteUpdateWithWhereUniqueWithoutMembreInput[]
    updateMany?: MembreActiviteUpdateManyWithWhereWithoutMembreInput | MembreActiviteUpdateManyWithWhereWithoutMembreInput[]
    deleteMany?: MembreActiviteScalarWhereInput | MembreActiviteScalarWhereInput[]
  }

  export type ProfilUncheckedUpdateOneWithoutMembreNestedInput = {
    create?: XOR<ProfilCreateWithoutMembreInput, ProfilUncheckedCreateWithoutMembreInput>
    connectOrCreate?: ProfilCreateOrConnectWithoutMembreInput
    upsert?: ProfilUpsertWithoutMembreInput
    disconnect?: ProfilWhereInput | boolean
    delete?: ProfilWhereInput | boolean
    connect?: ProfilWhereUniqueInput
    update?: XOR<XOR<ProfilUpdateToOneWithWhereWithoutMembreInput, ProfilUpdateWithoutMembreInput>, ProfilUncheckedUpdateWithoutMembreInput>
  }

  export type ArticleUncheckedUpdateManyWithoutRedacteurNestedInput = {
    create?: XOR<ArticleCreateWithoutRedacteurInput, ArticleUncheckedCreateWithoutRedacteurInput> | ArticleCreateWithoutRedacteurInput[] | ArticleUncheckedCreateWithoutRedacteurInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutRedacteurInput | ArticleCreateOrConnectWithoutRedacteurInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutRedacteurInput | ArticleUpsertWithWhereUniqueWithoutRedacteurInput[]
    createMany?: ArticleCreateManyRedacteurInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutRedacteurInput | ArticleUpdateWithWhereUniqueWithoutRedacteurInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutRedacteurInput | ArticleUpdateManyWithWhereWithoutRedacteurInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type FichierCreateNestedOneWithoutProfilsInput = {
    create?: XOR<FichierCreateWithoutProfilsInput, FichierUncheckedCreateWithoutProfilsInput>
    connectOrCreate?: FichierCreateOrConnectWithoutProfilsInput
    connect?: FichierWhereUniqueInput
  }

  export type MembreCreateNestedOneWithoutProfilInput = {
    create?: XOR<MembreCreateWithoutProfilInput, MembreUncheckedCreateWithoutProfilInput>
    connectOrCreate?: MembreCreateOrConnectWithoutProfilInput
    connect?: MembreWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FichierUpdateOneWithoutProfilsNestedInput = {
    create?: XOR<FichierCreateWithoutProfilsInput, FichierUncheckedCreateWithoutProfilsInput>
    connectOrCreate?: FichierCreateOrConnectWithoutProfilsInput
    upsert?: FichierUpsertWithoutProfilsInput
    disconnect?: FichierWhereInput | boolean
    delete?: FichierWhereInput | boolean
    connect?: FichierWhereUniqueInput
    update?: XOR<XOR<FichierUpdateToOneWithWhereWithoutProfilsInput, FichierUpdateWithoutProfilsInput>, FichierUncheckedUpdateWithoutProfilsInput>
  }

  export type MembreUpdateOneRequiredWithoutProfilNestedInput = {
    create?: XOR<MembreCreateWithoutProfilInput, MembreUncheckedCreateWithoutProfilInput>
    connectOrCreate?: MembreCreateOrConnectWithoutProfilInput
    upsert?: MembreUpsertWithoutProfilInput
    connect?: MembreWhereUniqueInput
    update?: XOR<XOR<MembreUpdateToOneWithWhereWithoutProfilInput, MembreUpdateWithoutProfilInput>, MembreUncheckedUpdateWithoutProfilInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FichierCreateNestedOneWithoutCategoriesActivitesInput = {
    create?: XOR<FichierCreateWithoutCategoriesActivitesInput, FichierUncheckedCreateWithoutCategoriesActivitesInput>
    connectOrCreate?: FichierCreateOrConnectWithoutCategoriesActivitesInput
    connect?: FichierWhereUniqueInput
  }

  export type ActiviteCreateNestedManyWithoutCategorieInput = {
    create?: XOR<ActiviteCreateWithoutCategorieInput, ActiviteUncheckedCreateWithoutCategorieInput> | ActiviteCreateWithoutCategorieInput[] | ActiviteUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: ActiviteCreateOrConnectWithoutCategorieInput | ActiviteCreateOrConnectWithoutCategorieInput[]
    createMany?: ActiviteCreateManyCategorieInputEnvelope
    connect?: ActiviteWhereUniqueInput | ActiviteWhereUniqueInput[]
  }

  export type ActiviteUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: XOR<ActiviteCreateWithoutCategorieInput, ActiviteUncheckedCreateWithoutCategorieInput> | ActiviteCreateWithoutCategorieInput[] | ActiviteUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: ActiviteCreateOrConnectWithoutCategorieInput | ActiviteCreateOrConnectWithoutCategorieInput[]
    createMany?: ActiviteCreateManyCategorieInputEnvelope
    connect?: ActiviteWhereUniqueInput | ActiviteWhereUniqueInput[]
  }

  export type FichierUpdateOneWithoutCategoriesActivitesNestedInput = {
    create?: XOR<FichierCreateWithoutCategoriesActivitesInput, FichierUncheckedCreateWithoutCategoriesActivitesInput>
    connectOrCreate?: FichierCreateOrConnectWithoutCategoriesActivitesInput
    upsert?: FichierUpsertWithoutCategoriesActivitesInput
    disconnect?: FichierWhereInput | boolean
    delete?: FichierWhereInput | boolean
    connect?: FichierWhereUniqueInput
    update?: XOR<XOR<FichierUpdateToOneWithWhereWithoutCategoriesActivitesInput, FichierUpdateWithoutCategoriesActivitesInput>, FichierUncheckedUpdateWithoutCategoriesActivitesInput>
  }

  export type ActiviteUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<ActiviteCreateWithoutCategorieInput, ActiviteUncheckedCreateWithoutCategorieInput> | ActiviteCreateWithoutCategorieInput[] | ActiviteUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: ActiviteCreateOrConnectWithoutCategorieInput | ActiviteCreateOrConnectWithoutCategorieInput[]
    upsert?: ActiviteUpsertWithWhereUniqueWithoutCategorieInput | ActiviteUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: ActiviteCreateManyCategorieInputEnvelope
    set?: ActiviteWhereUniqueInput | ActiviteWhereUniqueInput[]
    disconnect?: ActiviteWhereUniqueInput | ActiviteWhereUniqueInput[]
    delete?: ActiviteWhereUniqueInput | ActiviteWhereUniqueInput[]
    connect?: ActiviteWhereUniqueInput | ActiviteWhereUniqueInput[]
    update?: ActiviteUpdateWithWhereUniqueWithoutCategorieInput | ActiviteUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: ActiviteUpdateManyWithWhereWithoutCategorieInput | ActiviteUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: ActiviteScalarWhereInput | ActiviteScalarWhereInput[]
  }

  export type ActiviteUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<ActiviteCreateWithoutCategorieInput, ActiviteUncheckedCreateWithoutCategorieInput> | ActiviteCreateWithoutCategorieInput[] | ActiviteUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: ActiviteCreateOrConnectWithoutCategorieInput | ActiviteCreateOrConnectWithoutCategorieInput[]
    upsert?: ActiviteUpsertWithWhereUniqueWithoutCategorieInput | ActiviteUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: ActiviteCreateManyCategorieInputEnvelope
    set?: ActiviteWhereUniqueInput | ActiviteWhereUniqueInput[]
    disconnect?: ActiviteWhereUniqueInput | ActiviteWhereUniqueInput[]
    delete?: ActiviteWhereUniqueInput | ActiviteWhereUniqueInput[]
    connect?: ActiviteWhereUniqueInput | ActiviteWhereUniqueInput[]
    update?: ActiviteUpdateWithWhereUniqueWithoutCategorieInput | ActiviteUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: ActiviteUpdateManyWithWhereWithoutCategorieInput | ActiviteUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: ActiviteScalarWhereInput | ActiviteScalarWhereInput[]
  }

  export type CategorieActiviteCreateNestedOneWithoutActivitesInput = {
    create?: XOR<CategorieActiviteCreateWithoutActivitesInput, CategorieActiviteUncheckedCreateWithoutActivitesInput>
    connectOrCreate?: CategorieActiviteCreateOrConnectWithoutActivitesInput
    connect?: CategorieActiviteWhereUniqueInput
  }

  export type MembreActiviteCreateNestedManyWithoutActiviteInput = {
    create?: XOR<MembreActiviteCreateWithoutActiviteInput, MembreActiviteUncheckedCreateWithoutActiviteInput> | MembreActiviteCreateWithoutActiviteInput[] | MembreActiviteUncheckedCreateWithoutActiviteInput[]
    connectOrCreate?: MembreActiviteCreateOrConnectWithoutActiviteInput | MembreActiviteCreateOrConnectWithoutActiviteInput[]
    createMany?: MembreActiviteCreateManyActiviteInputEnvelope
    connect?: MembreActiviteWhereUniqueInput | MembreActiviteWhereUniqueInput[]
  }

  export type MembreActiviteUncheckedCreateNestedManyWithoutActiviteInput = {
    create?: XOR<MembreActiviteCreateWithoutActiviteInput, MembreActiviteUncheckedCreateWithoutActiviteInput> | MembreActiviteCreateWithoutActiviteInput[] | MembreActiviteUncheckedCreateWithoutActiviteInput[]
    connectOrCreate?: MembreActiviteCreateOrConnectWithoutActiviteInput | MembreActiviteCreateOrConnectWithoutActiviteInput[]
    createMany?: MembreActiviteCreateManyActiviteInputEnvelope
    connect?: MembreActiviteWhereUniqueInput | MembreActiviteWhereUniqueInput[]
  }

  export type CategorieActiviteUpdateOneRequiredWithoutActivitesNestedInput = {
    create?: XOR<CategorieActiviteCreateWithoutActivitesInput, CategorieActiviteUncheckedCreateWithoutActivitesInput>
    connectOrCreate?: CategorieActiviteCreateOrConnectWithoutActivitesInput
    upsert?: CategorieActiviteUpsertWithoutActivitesInput
    connect?: CategorieActiviteWhereUniqueInput
    update?: XOR<XOR<CategorieActiviteUpdateToOneWithWhereWithoutActivitesInput, CategorieActiviteUpdateWithoutActivitesInput>, CategorieActiviteUncheckedUpdateWithoutActivitesInput>
  }

  export type MembreActiviteUpdateManyWithoutActiviteNestedInput = {
    create?: XOR<MembreActiviteCreateWithoutActiviteInput, MembreActiviteUncheckedCreateWithoutActiviteInput> | MembreActiviteCreateWithoutActiviteInput[] | MembreActiviteUncheckedCreateWithoutActiviteInput[]
    connectOrCreate?: MembreActiviteCreateOrConnectWithoutActiviteInput | MembreActiviteCreateOrConnectWithoutActiviteInput[]
    upsert?: MembreActiviteUpsertWithWhereUniqueWithoutActiviteInput | MembreActiviteUpsertWithWhereUniqueWithoutActiviteInput[]
    createMany?: MembreActiviteCreateManyActiviteInputEnvelope
    set?: MembreActiviteWhereUniqueInput | MembreActiviteWhereUniqueInput[]
    disconnect?: MembreActiviteWhereUniqueInput | MembreActiviteWhereUniqueInput[]
    delete?: MembreActiviteWhereUniqueInput | MembreActiviteWhereUniqueInput[]
    connect?: MembreActiviteWhereUniqueInput | MembreActiviteWhereUniqueInput[]
    update?: MembreActiviteUpdateWithWhereUniqueWithoutActiviteInput | MembreActiviteUpdateWithWhereUniqueWithoutActiviteInput[]
    updateMany?: MembreActiviteUpdateManyWithWhereWithoutActiviteInput | MembreActiviteUpdateManyWithWhereWithoutActiviteInput[]
    deleteMany?: MembreActiviteScalarWhereInput | MembreActiviteScalarWhereInput[]
  }

  export type MembreActiviteUncheckedUpdateManyWithoutActiviteNestedInput = {
    create?: XOR<MembreActiviteCreateWithoutActiviteInput, MembreActiviteUncheckedCreateWithoutActiviteInput> | MembreActiviteCreateWithoutActiviteInput[] | MembreActiviteUncheckedCreateWithoutActiviteInput[]
    connectOrCreate?: MembreActiviteCreateOrConnectWithoutActiviteInput | MembreActiviteCreateOrConnectWithoutActiviteInput[]
    upsert?: MembreActiviteUpsertWithWhereUniqueWithoutActiviteInput | MembreActiviteUpsertWithWhereUniqueWithoutActiviteInput[]
    createMany?: MembreActiviteCreateManyActiviteInputEnvelope
    set?: MembreActiviteWhereUniqueInput | MembreActiviteWhereUniqueInput[]
    disconnect?: MembreActiviteWhereUniqueInput | MembreActiviteWhereUniqueInput[]
    delete?: MembreActiviteWhereUniqueInput | MembreActiviteWhereUniqueInput[]
    connect?: MembreActiviteWhereUniqueInput | MembreActiviteWhereUniqueInput[]
    update?: MembreActiviteUpdateWithWhereUniqueWithoutActiviteInput | MembreActiviteUpdateWithWhereUniqueWithoutActiviteInput[]
    updateMany?: MembreActiviteUpdateManyWithWhereWithoutActiviteInput | MembreActiviteUpdateManyWithWhereWithoutActiviteInput[]
    deleteMany?: MembreActiviteScalarWhereInput | MembreActiviteScalarWhereInput[]
  }

  export type MembreCreateNestedOneWithoutInscriptionsInput = {
    create?: XOR<MembreCreateWithoutInscriptionsInput, MembreUncheckedCreateWithoutInscriptionsInput>
    connectOrCreate?: MembreCreateOrConnectWithoutInscriptionsInput
    connect?: MembreWhereUniqueInput
  }

  export type ActiviteCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<ActiviteCreateWithoutParticipantsInput, ActiviteUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ActiviteCreateOrConnectWithoutParticipantsInput
    connect?: ActiviteWhereUniqueInput
  }

  export type MembreUpdateOneRequiredWithoutInscriptionsNestedInput = {
    create?: XOR<MembreCreateWithoutInscriptionsInput, MembreUncheckedCreateWithoutInscriptionsInput>
    connectOrCreate?: MembreCreateOrConnectWithoutInscriptionsInput
    upsert?: MembreUpsertWithoutInscriptionsInput
    connect?: MembreWhereUniqueInput
    update?: XOR<XOR<MembreUpdateToOneWithWhereWithoutInscriptionsInput, MembreUpdateWithoutInscriptionsInput>, MembreUncheckedUpdateWithoutInscriptionsInput>
  }

  export type ActiviteUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<ActiviteCreateWithoutParticipantsInput, ActiviteUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ActiviteCreateOrConnectWithoutParticipantsInput
    upsert?: ActiviteUpsertWithoutParticipantsInput
    connect?: ActiviteWhereUniqueInput
    update?: XOR<XOR<ActiviteUpdateToOneWithWhereWithoutParticipantsInput, ActiviteUpdateWithoutParticipantsInput>, ActiviteUncheckedUpdateWithoutParticipantsInput>
  }

  export type FichierCreateNestedOneWithoutArticlesInput = {
    create?: XOR<FichierCreateWithoutArticlesInput, FichierUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: FichierCreateOrConnectWithoutArticlesInput
    connect?: FichierWhereUniqueInput
  }

  export type MembreCreateNestedOneWithoutArticlesInput = {
    create?: XOR<MembreCreateWithoutArticlesInput, MembreUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: MembreCreateOrConnectWithoutArticlesInput
    connect?: MembreWhereUniqueInput
  }

  export type EnumStatutArticleTypesFieldUpdateOperationsInput = {
    set?: $Enums.StatutArticleTypes
  }

  export type EnumCategorieArticleTypesFieldUpdateOperationsInput = {
    set?: $Enums.CategorieArticleTypes
  }

  export type FichierUpdateOneWithoutArticlesNestedInput = {
    create?: XOR<FichierCreateWithoutArticlesInput, FichierUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: FichierCreateOrConnectWithoutArticlesInput
    upsert?: FichierUpsertWithoutArticlesInput
    disconnect?: FichierWhereInput | boolean
    delete?: FichierWhereInput | boolean
    connect?: FichierWhereUniqueInput
    update?: XOR<XOR<FichierUpdateToOneWithWhereWithoutArticlesInput, FichierUpdateWithoutArticlesInput>, FichierUncheckedUpdateWithoutArticlesInput>
  }

  export type MembreUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<MembreCreateWithoutArticlesInput, MembreUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: MembreCreateOrConnectWithoutArticlesInput
    upsert?: MembreUpsertWithoutArticlesInput
    connect?: MembreWhereUniqueInput
    update?: XOR<XOR<MembreUpdateToOneWithWhereWithoutArticlesInput, MembreUpdateWithoutArticlesInput>, MembreUncheckedUpdateWithoutArticlesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumFileTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileTypes | EnumFileTypesFieldRefInput<$PrismaModel>
    in?: $Enums.FileTypes[] | ListEnumFileTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileTypes[] | ListEnumFileTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypesFilter<$PrismaModel> | $Enums.FileTypes
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumFileTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileTypes | EnumFileTypesFieldRefInput<$PrismaModel>
    in?: $Enums.FileTypes[] | ListEnumFileTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileTypes[] | ListEnumFileTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypesWithAggregatesFilter<$PrismaModel> | $Enums.FileTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileTypesFilter<$PrismaModel>
    _max?: NestedEnumFileTypesFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleTypes | EnumRoleTypesFieldRefInput<$PrismaModel>
    in?: $Enums.RoleTypes[] | ListEnumRoleTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleTypes[] | ListEnumRoleTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypesFilter<$PrismaModel> | $Enums.RoleTypes
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleTypes | EnumRoleTypesFieldRefInput<$PrismaModel>
    in?: $Enums.RoleTypes[] | ListEnumRoleTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleTypes[] | ListEnumRoleTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypesWithAggregatesFilter<$PrismaModel> | $Enums.RoleTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleTypesFilter<$PrismaModel>
    _max?: NestedEnumRoleTypesFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatutArticleTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutArticleTypes | EnumStatutArticleTypesFieldRefInput<$PrismaModel>
    in?: $Enums.StatutArticleTypes[] | ListEnumStatutArticleTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutArticleTypes[] | ListEnumStatutArticleTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutArticleTypesFilter<$PrismaModel> | $Enums.StatutArticleTypes
  }

  export type NestedEnumCategorieArticleTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategorieArticleTypes | EnumCategorieArticleTypesFieldRefInput<$PrismaModel>
    in?: $Enums.CategorieArticleTypes[] | ListEnumCategorieArticleTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategorieArticleTypes[] | ListEnumCategorieArticleTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumCategorieArticleTypesFilter<$PrismaModel> | $Enums.CategorieArticleTypes
  }

  export type NestedEnumStatutArticleTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutArticleTypes | EnumStatutArticleTypesFieldRefInput<$PrismaModel>
    in?: $Enums.StatutArticleTypes[] | ListEnumStatutArticleTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutArticleTypes[] | ListEnumStatutArticleTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutArticleTypesWithAggregatesFilter<$PrismaModel> | $Enums.StatutArticleTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutArticleTypesFilter<$PrismaModel>
    _max?: NestedEnumStatutArticleTypesFilter<$PrismaModel>
  }

  export type NestedEnumCategorieArticleTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategorieArticleTypes | EnumCategorieArticleTypesFieldRefInput<$PrismaModel>
    in?: $Enums.CategorieArticleTypes[] | ListEnumCategorieArticleTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategorieArticleTypes[] | ListEnumCategorieArticleTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumCategorieArticleTypesWithAggregatesFilter<$PrismaModel> | $Enums.CategorieArticleTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategorieArticleTypesFilter<$PrismaModel>
    _max?: NestedEnumCategorieArticleTypesFilter<$PrismaModel>
  }

  export type ArticleCreateWithoutImageInput = {
    titre: string
    contenu: string
    statut: $Enums.StatutArticleTypes
    categorie: $Enums.CategorieArticleTypes
    redacteur: MembreCreateNestedOneWithoutArticlesInput
  }

  export type ArticleUncheckedCreateWithoutImageInput = {
    id?: number
    titre: string
    contenu: string
    statut: $Enums.StatutArticleTypes
    categorie: $Enums.CategorieArticleTypes
    redacteurId: number
  }

  export type ArticleCreateOrConnectWithoutImageInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutImageInput, ArticleUncheckedCreateWithoutImageInput>
  }

  export type ArticleCreateManyImageInputEnvelope = {
    data: ArticleCreateManyImageInput | ArticleCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type CategorieActiviteCreateWithoutImageInput = {
    lbl_categorie: string
    avec_equipement?: boolean
    couleur: string
    avec_notification?: boolean
    is_supprime?: boolean
    activites?: ActiviteCreateNestedManyWithoutCategorieInput
  }

  export type CategorieActiviteUncheckedCreateWithoutImageInput = {
    id?: number
    lbl_categorie: string
    avec_equipement?: boolean
    couleur: string
    avec_notification?: boolean
    is_supprime?: boolean
    activites?: ActiviteUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type CategorieActiviteCreateOrConnectWithoutImageInput = {
    where: CategorieActiviteWhereUniqueInput
    create: XOR<CategorieActiviteCreateWithoutImageInput, CategorieActiviteUncheckedCreateWithoutImageInput>
  }

  export type CategorieActiviteCreateManyImageInputEnvelope = {
    data: CategorieActiviteCreateManyImageInput | CategorieActiviteCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type ProfilCreateWithoutAvatarInput = {
    nom: string
    prenom: string
    telephone?: string | null
    communication_mail?: boolean
    communication_sms?: boolean
    membre: MembreCreateNestedOneWithoutProfilInput
  }

  export type ProfilUncheckedCreateWithoutAvatarInput = {
    id?: number
    nom: string
    prenom: string
    telephone?: string | null
    communication_mail?: boolean
    communication_sms?: boolean
    membreId: number
  }

  export type ProfilCreateOrConnectWithoutAvatarInput = {
    where: ProfilWhereUniqueInput
    create: XOR<ProfilCreateWithoutAvatarInput, ProfilUncheckedCreateWithoutAvatarInput>
  }

  export type ProfilCreateManyAvatarInputEnvelope = {
    data: ProfilCreateManyAvatarInput | ProfilCreateManyAvatarInput[]
    skipDuplicates?: boolean
  }

  export type ArticleUpsertWithWhereUniqueWithoutImageInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutImageInput, ArticleUncheckedUpdateWithoutImageInput>
    create: XOR<ArticleCreateWithoutImageInput, ArticleUncheckedCreateWithoutImageInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutImageInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutImageInput, ArticleUncheckedUpdateWithoutImageInput>
  }

  export type ArticleUpdateManyWithWhereWithoutImageInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutImageInput>
  }

  export type ArticleScalarWhereInput = {
    AND?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    OR?: ArticleScalarWhereInput[]
    NOT?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    id?: IntFilter<"Article"> | number
    titre?: StringFilter<"Article"> | string
    contenu?: StringFilter<"Article"> | string
    statut?: EnumStatutArticleTypesFilter<"Article"> | $Enums.StatutArticleTypes
    categorie?: EnumCategorieArticleTypesFilter<"Article"> | $Enums.CategorieArticleTypes
    imageId?: IntNullableFilter<"Article"> | number | null
    redacteurId?: IntFilter<"Article"> | number
  }

  export type CategorieActiviteUpsertWithWhereUniqueWithoutImageInput = {
    where: CategorieActiviteWhereUniqueInput
    update: XOR<CategorieActiviteUpdateWithoutImageInput, CategorieActiviteUncheckedUpdateWithoutImageInput>
    create: XOR<CategorieActiviteCreateWithoutImageInput, CategorieActiviteUncheckedCreateWithoutImageInput>
  }

  export type CategorieActiviteUpdateWithWhereUniqueWithoutImageInput = {
    where: CategorieActiviteWhereUniqueInput
    data: XOR<CategorieActiviteUpdateWithoutImageInput, CategorieActiviteUncheckedUpdateWithoutImageInput>
  }

  export type CategorieActiviteUpdateManyWithWhereWithoutImageInput = {
    where: CategorieActiviteScalarWhereInput
    data: XOR<CategorieActiviteUpdateManyMutationInput, CategorieActiviteUncheckedUpdateManyWithoutImageInput>
  }

  export type CategorieActiviteScalarWhereInput = {
    AND?: CategorieActiviteScalarWhereInput | CategorieActiviteScalarWhereInput[]
    OR?: CategorieActiviteScalarWhereInput[]
    NOT?: CategorieActiviteScalarWhereInput | CategorieActiviteScalarWhereInput[]
    id?: IntFilter<"CategorieActivite"> | number
    lbl_categorie?: StringFilter<"CategorieActivite"> | string
    avec_equipement?: BoolFilter<"CategorieActivite"> | boolean
    couleur?: StringFilter<"CategorieActivite"> | string
    avec_notification?: BoolFilter<"CategorieActivite"> | boolean
    is_supprime?: BoolFilter<"CategorieActivite"> | boolean
    imageId?: IntNullableFilter<"CategorieActivite"> | number | null
  }

  export type ProfilUpsertWithWhereUniqueWithoutAvatarInput = {
    where: ProfilWhereUniqueInput
    update: XOR<ProfilUpdateWithoutAvatarInput, ProfilUncheckedUpdateWithoutAvatarInput>
    create: XOR<ProfilCreateWithoutAvatarInput, ProfilUncheckedCreateWithoutAvatarInput>
  }

  export type ProfilUpdateWithWhereUniqueWithoutAvatarInput = {
    where: ProfilWhereUniqueInput
    data: XOR<ProfilUpdateWithoutAvatarInput, ProfilUncheckedUpdateWithoutAvatarInput>
  }

  export type ProfilUpdateManyWithWhereWithoutAvatarInput = {
    where: ProfilScalarWhereInput
    data: XOR<ProfilUpdateManyMutationInput, ProfilUncheckedUpdateManyWithoutAvatarInput>
  }

  export type ProfilScalarWhereInput = {
    AND?: ProfilScalarWhereInput | ProfilScalarWhereInput[]
    OR?: ProfilScalarWhereInput[]
    NOT?: ProfilScalarWhereInput | ProfilScalarWhereInput[]
    id?: IntFilter<"Profil"> | number
    nom?: StringFilter<"Profil"> | string
    prenom?: StringFilter<"Profil"> | string
    telephone?: StringNullableFilter<"Profil"> | string | null
    communication_mail?: BoolFilter<"Profil"> | boolean
    communication_sms?: BoolFilter<"Profil"> | boolean
    avatarId?: IntNullableFilter<"Profil"> | number | null
    membreId?: IntFilter<"Profil"> | number
  }

  export type MembreActiviteCreateWithoutMembreInput = {
    observations?: string | null
    dateInscription?: Date | string
    activite: ActiviteCreateNestedOneWithoutParticipantsInput
  }

  export type MembreActiviteUncheckedCreateWithoutMembreInput = {
    id?: number
    observations?: string | null
    dateInscription?: Date | string
    activiteId: number
  }

  export type MembreActiviteCreateOrConnectWithoutMembreInput = {
    where: MembreActiviteWhereUniqueInput
    create: XOR<MembreActiviteCreateWithoutMembreInput, MembreActiviteUncheckedCreateWithoutMembreInput>
  }

  export type MembreActiviteCreateManyMembreInputEnvelope = {
    data: MembreActiviteCreateManyMembreInput | MembreActiviteCreateManyMembreInput[]
    skipDuplicates?: boolean
  }

  export type ProfilCreateWithoutMembreInput = {
    nom: string
    prenom: string
    telephone?: string | null
    communication_mail?: boolean
    communication_sms?: boolean
    avatar?: FichierCreateNestedOneWithoutProfilsInput
  }

  export type ProfilUncheckedCreateWithoutMembreInput = {
    id?: number
    nom: string
    prenom: string
    telephone?: string | null
    communication_mail?: boolean
    communication_sms?: boolean
    avatarId?: number | null
  }

  export type ProfilCreateOrConnectWithoutMembreInput = {
    where: ProfilWhereUniqueInput
    create: XOR<ProfilCreateWithoutMembreInput, ProfilUncheckedCreateWithoutMembreInput>
  }

  export type ArticleCreateWithoutRedacteurInput = {
    titre: string
    contenu: string
    statut: $Enums.StatutArticleTypes
    categorie: $Enums.CategorieArticleTypes
    image?: FichierCreateNestedOneWithoutArticlesInput
  }

  export type ArticleUncheckedCreateWithoutRedacteurInput = {
    id?: number
    titre: string
    contenu: string
    statut: $Enums.StatutArticleTypes
    categorie: $Enums.CategorieArticleTypes
    imageId?: number | null
  }

  export type ArticleCreateOrConnectWithoutRedacteurInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutRedacteurInput, ArticleUncheckedCreateWithoutRedacteurInput>
  }

  export type ArticleCreateManyRedacteurInputEnvelope = {
    data: ArticleCreateManyRedacteurInput | ArticleCreateManyRedacteurInput[]
    skipDuplicates?: boolean
  }

  export type MembreActiviteUpsertWithWhereUniqueWithoutMembreInput = {
    where: MembreActiviteWhereUniqueInput
    update: XOR<MembreActiviteUpdateWithoutMembreInput, MembreActiviteUncheckedUpdateWithoutMembreInput>
    create: XOR<MembreActiviteCreateWithoutMembreInput, MembreActiviteUncheckedCreateWithoutMembreInput>
  }

  export type MembreActiviteUpdateWithWhereUniqueWithoutMembreInput = {
    where: MembreActiviteWhereUniqueInput
    data: XOR<MembreActiviteUpdateWithoutMembreInput, MembreActiviteUncheckedUpdateWithoutMembreInput>
  }

  export type MembreActiviteUpdateManyWithWhereWithoutMembreInput = {
    where: MembreActiviteScalarWhereInput
    data: XOR<MembreActiviteUpdateManyMutationInput, MembreActiviteUncheckedUpdateManyWithoutMembreInput>
  }

  export type MembreActiviteScalarWhereInput = {
    AND?: MembreActiviteScalarWhereInput | MembreActiviteScalarWhereInput[]
    OR?: MembreActiviteScalarWhereInput[]
    NOT?: MembreActiviteScalarWhereInput | MembreActiviteScalarWhereInput[]
    id?: IntFilter<"MembreActivite"> | number
    observations?: StringNullableFilter<"MembreActivite"> | string | null
    dateInscription?: DateTimeFilter<"MembreActivite"> | Date | string
    membreId?: IntFilter<"MembreActivite"> | number
    activiteId?: IntFilter<"MembreActivite"> | number
  }

  export type ProfilUpsertWithoutMembreInput = {
    update: XOR<ProfilUpdateWithoutMembreInput, ProfilUncheckedUpdateWithoutMembreInput>
    create: XOR<ProfilCreateWithoutMembreInput, ProfilUncheckedCreateWithoutMembreInput>
    where?: ProfilWhereInput
  }

  export type ProfilUpdateToOneWithWhereWithoutMembreInput = {
    where?: ProfilWhereInput
    data: XOR<ProfilUpdateWithoutMembreInput, ProfilUncheckedUpdateWithoutMembreInput>
  }

  export type ProfilUpdateWithoutMembreInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    communication_mail?: BoolFieldUpdateOperationsInput | boolean
    communication_sms?: BoolFieldUpdateOperationsInput | boolean
    avatar?: FichierUpdateOneWithoutProfilsNestedInput
  }

  export type ProfilUncheckedUpdateWithoutMembreInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    communication_mail?: BoolFieldUpdateOperationsInput | boolean
    communication_sms?: BoolFieldUpdateOperationsInput | boolean
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArticleUpsertWithWhereUniqueWithoutRedacteurInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutRedacteurInput, ArticleUncheckedUpdateWithoutRedacteurInput>
    create: XOR<ArticleCreateWithoutRedacteurInput, ArticleUncheckedCreateWithoutRedacteurInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutRedacteurInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutRedacteurInput, ArticleUncheckedUpdateWithoutRedacteurInput>
  }

  export type ArticleUpdateManyWithWhereWithoutRedacteurInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutRedacteurInput>
  }

  export type FichierCreateWithoutProfilsInput = {
    nom: string
    url: string
    type?: $Enums.FileTypes
    mime: string
    taille: string
    dateCreation?: Date | string
    dateMaj?: Date | string
    articles?: ArticleCreateNestedManyWithoutImageInput
    categoriesActivites?: CategorieActiviteCreateNestedManyWithoutImageInput
  }

  export type FichierUncheckedCreateWithoutProfilsInput = {
    id?: number
    nom: string
    url: string
    type?: $Enums.FileTypes
    mime: string
    taille: string
    dateCreation?: Date | string
    dateMaj?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutImageInput
    categoriesActivites?: CategorieActiviteUncheckedCreateNestedManyWithoutImageInput
  }

  export type FichierCreateOrConnectWithoutProfilsInput = {
    where: FichierWhereUniqueInput
    create: XOR<FichierCreateWithoutProfilsInput, FichierUncheckedCreateWithoutProfilsInput>
  }

  export type MembreCreateWithoutProfilInput = {
    email: string
    mot_de_passe: string
    est_supprime?: boolean
    role?: $Enums.RoleTypes
    inscriptions?: MembreActiviteCreateNestedManyWithoutMembreInput
    articles?: ArticleCreateNestedManyWithoutRedacteurInput
  }

  export type MembreUncheckedCreateWithoutProfilInput = {
    id?: number
    email: string
    mot_de_passe: string
    est_supprime?: boolean
    role?: $Enums.RoleTypes
    inscriptions?: MembreActiviteUncheckedCreateNestedManyWithoutMembreInput
    articles?: ArticleUncheckedCreateNestedManyWithoutRedacteurInput
  }

  export type MembreCreateOrConnectWithoutProfilInput = {
    where: MembreWhereUniqueInput
    create: XOR<MembreCreateWithoutProfilInput, MembreUncheckedCreateWithoutProfilInput>
  }

  export type FichierUpsertWithoutProfilsInput = {
    update: XOR<FichierUpdateWithoutProfilsInput, FichierUncheckedUpdateWithoutProfilsInput>
    create: XOR<FichierCreateWithoutProfilsInput, FichierUncheckedCreateWithoutProfilsInput>
    where?: FichierWhereInput
  }

  export type FichierUpdateToOneWithWhereWithoutProfilsInput = {
    where?: FichierWhereInput
    data: XOR<FichierUpdateWithoutProfilsInput, FichierUncheckedUpdateWithoutProfilsInput>
  }

  export type FichierUpdateWithoutProfilsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumFileTypesFieldUpdateOperationsInput | $Enums.FileTypes
    mime?: StringFieldUpdateOperationsInput | string
    taille?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMaj?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutImageNestedInput
    categoriesActivites?: CategorieActiviteUpdateManyWithoutImageNestedInput
  }

  export type FichierUncheckedUpdateWithoutProfilsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumFileTypesFieldUpdateOperationsInput | $Enums.FileTypes
    mime?: StringFieldUpdateOperationsInput | string
    taille?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMaj?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutImageNestedInput
    categoriesActivites?: CategorieActiviteUncheckedUpdateManyWithoutImageNestedInput
  }

  export type MembreUpsertWithoutProfilInput = {
    update: XOR<MembreUpdateWithoutProfilInput, MembreUncheckedUpdateWithoutProfilInput>
    create: XOR<MembreCreateWithoutProfilInput, MembreUncheckedCreateWithoutProfilInput>
    where?: MembreWhereInput
  }

  export type MembreUpdateToOneWithWhereWithoutProfilInput = {
    where?: MembreWhereInput
    data: XOR<MembreUpdateWithoutProfilInput, MembreUncheckedUpdateWithoutProfilInput>
  }

  export type MembreUpdateWithoutProfilInput = {
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    est_supprime?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleTypesFieldUpdateOperationsInput | $Enums.RoleTypes
    inscriptions?: MembreActiviteUpdateManyWithoutMembreNestedInput
    articles?: ArticleUpdateManyWithoutRedacteurNestedInput
  }

  export type MembreUncheckedUpdateWithoutProfilInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    est_supprime?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleTypesFieldUpdateOperationsInput | $Enums.RoleTypes
    inscriptions?: MembreActiviteUncheckedUpdateManyWithoutMembreNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutRedacteurNestedInput
  }

  export type FichierCreateWithoutCategoriesActivitesInput = {
    nom: string
    url: string
    type?: $Enums.FileTypes
    mime: string
    taille: string
    dateCreation?: Date | string
    dateMaj?: Date | string
    articles?: ArticleCreateNestedManyWithoutImageInput
    profils?: ProfilCreateNestedManyWithoutAvatarInput
  }

  export type FichierUncheckedCreateWithoutCategoriesActivitesInput = {
    id?: number
    nom: string
    url: string
    type?: $Enums.FileTypes
    mime: string
    taille: string
    dateCreation?: Date | string
    dateMaj?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutImageInput
    profils?: ProfilUncheckedCreateNestedManyWithoutAvatarInput
  }

  export type FichierCreateOrConnectWithoutCategoriesActivitesInput = {
    where: FichierWhereUniqueInput
    create: XOR<FichierCreateWithoutCategoriesActivitesInput, FichierUncheckedCreateWithoutCategoriesActivitesInput>
  }

  export type ActiviteCreateWithoutCategorieInput = {
    titre: string
    contenu: string
    date_heure_debut: Date | string
    date_heure_fin: Date | string
    participants?: MembreActiviteCreateNestedManyWithoutActiviteInput
  }

  export type ActiviteUncheckedCreateWithoutCategorieInput = {
    id?: number
    titre: string
    contenu: string
    date_heure_debut: Date | string
    date_heure_fin: Date | string
    participants?: MembreActiviteUncheckedCreateNestedManyWithoutActiviteInput
  }

  export type ActiviteCreateOrConnectWithoutCategorieInput = {
    where: ActiviteWhereUniqueInput
    create: XOR<ActiviteCreateWithoutCategorieInput, ActiviteUncheckedCreateWithoutCategorieInput>
  }

  export type ActiviteCreateManyCategorieInputEnvelope = {
    data: ActiviteCreateManyCategorieInput | ActiviteCreateManyCategorieInput[]
    skipDuplicates?: boolean
  }

  export type FichierUpsertWithoutCategoriesActivitesInput = {
    update: XOR<FichierUpdateWithoutCategoriesActivitesInput, FichierUncheckedUpdateWithoutCategoriesActivitesInput>
    create: XOR<FichierCreateWithoutCategoriesActivitesInput, FichierUncheckedCreateWithoutCategoriesActivitesInput>
    where?: FichierWhereInput
  }

  export type FichierUpdateToOneWithWhereWithoutCategoriesActivitesInput = {
    where?: FichierWhereInput
    data: XOR<FichierUpdateWithoutCategoriesActivitesInput, FichierUncheckedUpdateWithoutCategoriesActivitesInput>
  }

  export type FichierUpdateWithoutCategoriesActivitesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumFileTypesFieldUpdateOperationsInput | $Enums.FileTypes
    mime?: StringFieldUpdateOperationsInput | string
    taille?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMaj?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutImageNestedInput
    profils?: ProfilUpdateManyWithoutAvatarNestedInput
  }

  export type FichierUncheckedUpdateWithoutCategoriesActivitesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumFileTypesFieldUpdateOperationsInput | $Enums.FileTypes
    mime?: StringFieldUpdateOperationsInput | string
    taille?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMaj?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutImageNestedInput
    profils?: ProfilUncheckedUpdateManyWithoutAvatarNestedInput
  }

  export type ActiviteUpsertWithWhereUniqueWithoutCategorieInput = {
    where: ActiviteWhereUniqueInput
    update: XOR<ActiviteUpdateWithoutCategorieInput, ActiviteUncheckedUpdateWithoutCategorieInput>
    create: XOR<ActiviteCreateWithoutCategorieInput, ActiviteUncheckedCreateWithoutCategorieInput>
  }

  export type ActiviteUpdateWithWhereUniqueWithoutCategorieInput = {
    where: ActiviteWhereUniqueInput
    data: XOR<ActiviteUpdateWithoutCategorieInput, ActiviteUncheckedUpdateWithoutCategorieInput>
  }

  export type ActiviteUpdateManyWithWhereWithoutCategorieInput = {
    where: ActiviteScalarWhereInput
    data: XOR<ActiviteUpdateManyMutationInput, ActiviteUncheckedUpdateManyWithoutCategorieInput>
  }

  export type ActiviteScalarWhereInput = {
    AND?: ActiviteScalarWhereInput | ActiviteScalarWhereInput[]
    OR?: ActiviteScalarWhereInput[]
    NOT?: ActiviteScalarWhereInput | ActiviteScalarWhereInput[]
    id?: IntFilter<"Activite"> | number
    titre?: StringFilter<"Activite"> | string
    contenu?: StringFilter<"Activite"> | string
    date_heure_debut?: DateTimeFilter<"Activite"> | Date | string
    date_heure_fin?: DateTimeFilter<"Activite"> | Date | string
    categorieId?: IntFilter<"Activite"> | number
  }

  export type CategorieActiviteCreateWithoutActivitesInput = {
    lbl_categorie: string
    avec_equipement?: boolean
    couleur: string
    avec_notification?: boolean
    is_supprime?: boolean
    image?: FichierCreateNestedOneWithoutCategoriesActivitesInput
  }

  export type CategorieActiviteUncheckedCreateWithoutActivitesInput = {
    id?: number
    lbl_categorie: string
    avec_equipement?: boolean
    couleur: string
    avec_notification?: boolean
    is_supprime?: boolean
    imageId?: number | null
  }

  export type CategorieActiviteCreateOrConnectWithoutActivitesInput = {
    where: CategorieActiviteWhereUniqueInput
    create: XOR<CategorieActiviteCreateWithoutActivitesInput, CategorieActiviteUncheckedCreateWithoutActivitesInput>
  }

  export type MembreActiviteCreateWithoutActiviteInput = {
    observations?: string | null
    dateInscription?: Date | string
    membre: MembreCreateNestedOneWithoutInscriptionsInput
  }

  export type MembreActiviteUncheckedCreateWithoutActiviteInput = {
    id?: number
    observations?: string | null
    dateInscription?: Date | string
    membreId: number
  }

  export type MembreActiviteCreateOrConnectWithoutActiviteInput = {
    where: MembreActiviteWhereUniqueInput
    create: XOR<MembreActiviteCreateWithoutActiviteInput, MembreActiviteUncheckedCreateWithoutActiviteInput>
  }

  export type MembreActiviteCreateManyActiviteInputEnvelope = {
    data: MembreActiviteCreateManyActiviteInput | MembreActiviteCreateManyActiviteInput[]
    skipDuplicates?: boolean
  }

  export type CategorieActiviteUpsertWithoutActivitesInput = {
    update: XOR<CategorieActiviteUpdateWithoutActivitesInput, CategorieActiviteUncheckedUpdateWithoutActivitesInput>
    create: XOR<CategorieActiviteCreateWithoutActivitesInput, CategorieActiviteUncheckedCreateWithoutActivitesInput>
    where?: CategorieActiviteWhereInput
  }

  export type CategorieActiviteUpdateToOneWithWhereWithoutActivitesInput = {
    where?: CategorieActiviteWhereInput
    data: XOR<CategorieActiviteUpdateWithoutActivitesInput, CategorieActiviteUncheckedUpdateWithoutActivitesInput>
  }

  export type CategorieActiviteUpdateWithoutActivitesInput = {
    lbl_categorie?: StringFieldUpdateOperationsInput | string
    avec_equipement?: BoolFieldUpdateOperationsInput | boolean
    couleur?: StringFieldUpdateOperationsInput | string
    avec_notification?: BoolFieldUpdateOperationsInput | boolean
    is_supprime?: BoolFieldUpdateOperationsInput | boolean
    image?: FichierUpdateOneWithoutCategoriesActivitesNestedInput
  }

  export type CategorieActiviteUncheckedUpdateWithoutActivitesInput = {
    id?: IntFieldUpdateOperationsInput | number
    lbl_categorie?: StringFieldUpdateOperationsInput | string
    avec_equipement?: BoolFieldUpdateOperationsInput | boolean
    couleur?: StringFieldUpdateOperationsInput | string
    avec_notification?: BoolFieldUpdateOperationsInput | boolean
    is_supprime?: BoolFieldUpdateOperationsInput | boolean
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MembreActiviteUpsertWithWhereUniqueWithoutActiviteInput = {
    where: MembreActiviteWhereUniqueInput
    update: XOR<MembreActiviteUpdateWithoutActiviteInput, MembreActiviteUncheckedUpdateWithoutActiviteInput>
    create: XOR<MembreActiviteCreateWithoutActiviteInput, MembreActiviteUncheckedCreateWithoutActiviteInput>
  }

  export type MembreActiviteUpdateWithWhereUniqueWithoutActiviteInput = {
    where: MembreActiviteWhereUniqueInput
    data: XOR<MembreActiviteUpdateWithoutActiviteInput, MembreActiviteUncheckedUpdateWithoutActiviteInput>
  }

  export type MembreActiviteUpdateManyWithWhereWithoutActiviteInput = {
    where: MembreActiviteScalarWhereInput
    data: XOR<MembreActiviteUpdateManyMutationInput, MembreActiviteUncheckedUpdateManyWithoutActiviteInput>
  }

  export type MembreCreateWithoutInscriptionsInput = {
    email: string
    mot_de_passe: string
    est_supprime?: boolean
    role?: $Enums.RoleTypes
    profil?: ProfilCreateNestedOneWithoutMembreInput
    articles?: ArticleCreateNestedManyWithoutRedacteurInput
  }

  export type MembreUncheckedCreateWithoutInscriptionsInput = {
    id?: number
    email: string
    mot_de_passe: string
    est_supprime?: boolean
    role?: $Enums.RoleTypes
    profil?: ProfilUncheckedCreateNestedOneWithoutMembreInput
    articles?: ArticleUncheckedCreateNestedManyWithoutRedacteurInput
  }

  export type MembreCreateOrConnectWithoutInscriptionsInput = {
    where: MembreWhereUniqueInput
    create: XOR<MembreCreateWithoutInscriptionsInput, MembreUncheckedCreateWithoutInscriptionsInput>
  }

  export type ActiviteCreateWithoutParticipantsInput = {
    titre: string
    contenu: string
    date_heure_debut: Date | string
    date_heure_fin: Date | string
    categorie: CategorieActiviteCreateNestedOneWithoutActivitesInput
  }

  export type ActiviteUncheckedCreateWithoutParticipantsInput = {
    id?: number
    titre: string
    contenu: string
    date_heure_debut: Date | string
    date_heure_fin: Date | string
    categorieId: number
  }

  export type ActiviteCreateOrConnectWithoutParticipantsInput = {
    where: ActiviteWhereUniqueInput
    create: XOR<ActiviteCreateWithoutParticipantsInput, ActiviteUncheckedCreateWithoutParticipantsInput>
  }

  export type MembreUpsertWithoutInscriptionsInput = {
    update: XOR<MembreUpdateWithoutInscriptionsInput, MembreUncheckedUpdateWithoutInscriptionsInput>
    create: XOR<MembreCreateWithoutInscriptionsInput, MembreUncheckedCreateWithoutInscriptionsInput>
    where?: MembreWhereInput
  }

  export type MembreUpdateToOneWithWhereWithoutInscriptionsInput = {
    where?: MembreWhereInput
    data: XOR<MembreUpdateWithoutInscriptionsInput, MembreUncheckedUpdateWithoutInscriptionsInput>
  }

  export type MembreUpdateWithoutInscriptionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    est_supprime?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleTypesFieldUpdateOperationsInput | $Enums.RoleTypes
    profil?: ProfilUpdateOneWithoutMembreNestedInput
    articles?: ArticleUpdateManyWithoutRedacteurNestedInput
  }

  export type MembreUncheckedUpdateWithoutInscriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    est_supprime?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleTypesFieldUpdateOperationsInput | $Enums.RoleTypes
    profil?: ProfilUncheckedUpdateOneWithoutMembreNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutRedacteurNestedInput
  }

  export type ActiviteUpsertWithoutParticipantsInput = {
    update: XOR<ActiviteUpdateWithoutParticipantsInput, ActiviteUncheckedUpdateWithoutParticipantsInput>
    create: XOR<ActiviteCreateWithoutParticipantsInput, ActiviteUncheckedCreateWithoutParticipantsInput>
    where?: ActiviteWhereInput
  }

  export type ActiviteUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: ActiviteWhereInput
    data: XOR<ActiviteUpdateWithoutParticipantsInput, ActiviteUncheckedUpdateWithoutParticipantsInput>
  }

  export type ActiviteUpdateWithoutParticipantsInput = {
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    date_heure_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_heure_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    categorie?: CategorieActiviteUpdateOneRequiredWithoutActivitesNestedInput
  }

  export type ActiviteUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    date_heure_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_heure_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    categorieId?: IntFieldUpdateOperationsInput | number
  }

  export type FichierCreateWithoutArticlesInput = {
    nom: string
    url: string
    type?: $Enums.FileTypes
    mime: string
    taille: string
    dateCreation?: Date | string
    dateMaj?: Date | string
    categoriesActivites?: CategorieActiviteCreateNestedManyWithoutImageInput
    profils?: ProfilCreateNestedManyWithoutAvatarInput
  }

  export type FichierUncheckedCreateWithoutArticlesInput = {
    id?: number
    nom: string
    url: string
    type?: $Enums.FileTypes
    mime: string
    taille: string
    dateCreation?: Date | string
    dateMaj?: Date | string
    categoriesActivites?: CategorieActiviteUncheckedCreateNestedManyWithoutImageInput
    profils?: ProfilUncheckedCreateNestedManyWithoutAvatarInput
  }

  export type FichierCreateOrConnectWithoutArticlesInput = {
    where: FichierWhereUniqueInput
    create: XOR<FichierCreateWithoutArticlesInput, FichierUncheckedCreateWithoutArticlesInput>
  }

  export type MembreCreateWithoutArticlesInput = {
    email: string
    mot_de_passe: string
    est_supprime?: boolean
    role?: $Enums.RoleTypes
    inscriptions?: MembreActiviteCreateNestedManyWithoutMembreInput
    profil?: ProfilCreateNestedOneWithoutMembreInput
  }

  export type MembreUncheckedCreateWithoutArticlesInput = {
    id?: number
    email: string
    mot_de_passe: string
    est_supprime?: boolean
    role?: $Enums.RoleTypes
    inscriptions?: MembreActiviteUncheckedCreateNestedManyWithoutMembreInput
    profil?: ProfilUncheckedCreateNestedOneWithoutMembreInput
  }

  export type MembreCreateOrConnectWithoutArticlesInput = {
    where: MembreWhereUniqueInput
    create: XOR<MembreCreateWithoutArticlesInput, MembreUncheckedCreateWithoutArticlesInput>
  }

  export type FichierUpsertWithoutArticlesInput = {
    update: XOR<FichierUpdateWithoutArticlesInput, FichierUncheckedUpdateWithoutArticlesInput>
    create: XOR<FichierCreateWithoutArticlesInput, FichierUncheckedCreateWithoutArticlesInput>
    where?: FichierWhereInput
  }

  export type FichierUpdateToOneWithWhereWithoutArticlesInput = {
    where?: FichierWhereInput
    data: XOR<FichierUpdateWithoutArticlesInput, FichierUncheckedUpdateWithoutArticlesInput>
  }

  export type FichierUpdateWithoutArticlesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumFileTypesFieldUpdateOperationsInput | $Enums.FileTypes
    mime?: StringFieldUpdateOperationsInput | string
    taille?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMaj?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriesActivites?: CategorieActiviteUpdateManyWithoutImageNestedInput
    profils?: ProfilUpdateManyWithoutAvatarNestedInput
  }

  export type FichierUncheckedUpdateWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumFileTypesFieldUpdateOperationsInput | $Enums.FileTypes
    mime?: StringFieldUpdateOperationsInput | string
    taille?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMaj?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriesActivites?: CategorieActiviteUncheckedUpdateManyWithoutImageNestedInput
    profils?: ProfilUncheckedUpdateManyWithoutAvatarNestedInput
  }

  export type MembreUpsertWithoutArticlesInput = {
    update: XOR<MembreUpdateWithoutArticlesInput, MembreUncheckedUpdateWithoutArticlesInput>
    create: XOR<MembreCreateWithoutArticlesInput, MembreUncheckedCreateWithoutArticlesInput>
    where?: MembreWhereInput
  }

  export type MembreUpdateToOneWithWhereWithoutArticlesInput = {
    where?: MembreWhereInput
    data: XOR<MembreUpdateWithoutArticlesInput, MembreUncheckedUpdateWithoutArticlesInput>
  }

  export type MembreUpdateWithoutArticlesInput = {
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    est_supprime?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleTypesFieldUpdateOperationsInput | $Enums.RoleTypes
    inscriptions?: MembreActiviteUpdateManyWithoutMembreNestedInput
    profil?: ProfilUpdateOneWithoutMembreNestedInput
  }

  export type MembreUncheckedUpdateWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    est_supprime?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleTypesFieldUpdateOperationsInput | $Enums.RoleTypes
    inscriptions?: MembreActiviteUncheckedUpdateManyWithoutMembreNestedInput
    profil?: ProfilUncheckedUpdateOneWithoutMembreNestedInput
  }

  export type ArticleCreateManyImageInput = {
    id?: number
    titre: string
    contenu: string
    statut: $Enums.StatutArticleTypes
    categorie: $Enums.CategorieArticleTypes
    redacteurId: number
  }

  export type CategorieActiviteCreateManyImageInput = {
    id?: number
    lbl_categorie: string
    avec_equipement?: boolean
    couleur: string
    avec_notification?: boolean
    is_supprime?: boolean
  }

  export type ProfilCreateManyAvatarInput = {
    id?: number
    nom: string
    prenom: string
    telephone?: string | null
    communication_mail?: boolean
    communication_sms?: boolean
    membreId: number
  }

  export type ArticleUpdateWithoutImageInput = {
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutArticleTypesFieldUpdateOperationsInput | $Enums.StatutArticleTypes
    categorie?: EnumCategorieArticleTypesFieldUpdateOperationsInput | $Enums.CategorieArticleTypes
    redacteur?: MembreUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutArticleTypesFieldUpdateOperationsInput | $Enums.StatutArticleTypes
    categorie?: EnumCategorieArticleTypesFieldUpdateOperationsInput | $Enums.CategorieArticleTypes
    redacteurId?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleUncheckedUpdateManyWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutArticleTypesFieldUpdateOperationsInput | $Enums.StatutArticleTypes
    categorie?: EnumCategorieArticleTypesFieldUpdateOperationsInput | $Enums.CategorieArticleTypes
    redacteurId?: IntFieldUpdateOperationsInput | number
  }

  export type CategorieActiviteUpdateWithoutImageInput = {
    lbl_categorie?: StringFieldUpdateOperationsInput | string
    avec_equipement?: BoolFieldUpdateOperationsInput | boolean
    couleur?: StringFieldUpdateOperationsInput | string
    avec_notification?: BoolFieldUpdateOperationsInput | boolean
    is_supprime?: BoolFieldUpdateOperationsInput | boolean
    activites?: ActiviteUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieActiviteUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    lbl_categorie?: StringFieldUpdateOperationsInput | string
    avec_equipement?: BoolFieldUpdateOperationsInput | boolean
    couleur?: StringFieldUpdateOperationsInput | string
    avec_notification?: BoolFieldUpdateOperationsInput | boolean
    is_supprime?: BoolFieldUpdateOperationsInput | boolean
    activites?: ActiviteUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieActiviteUncheckedUpdateManyWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    lbl_categorie?: StringFieldUpdateOperationsInput | string
    avec_equipement?: BoolFieldUpdateOperationsInput | boolean
    couleur?: StringFieldUpdateOperationsInput | string
    avec_notification?: BoolFieldUpdateOperationsInput | boolean
    is_supprime?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProfilUpdateWithoutAvatarInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    communication_mail?: BoolFieldUpdateOperationsInput | boolean
    communication_sms?: BoolFieldUpdateOperationsInput | boolean
    membre?: MembreUpdateOneRequiredWithoutProfilNestedInput
  }

  export type ProfilUncheckedUpdateWithoutAvatarInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    communication_mail?: BoolFieldUpdateOperationsInput | boolean
    communication_sms?: BoolFieldUpdateOperationsInput | boolean
    membreId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfilUncheckedUpdateManyWithoutAvatarInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    communication_mail?: BoolFieldUpdateOperationsInput | boolean
    communication_sms?: BoolFieldUpdateOperationsInput | boolean
    membreId?: IntFieldUpdateOperationsInput | number
  }

  export type MembreActiviteCreateManyMembreInput = {
    id?: number
    observations?: string | null
    dateInscription?: Date | string
    activiteId: number
  }

  export type ArticleCreateManyRedacteurInput = {
    id?: number
    titre: string
    contenu: string
    statut: $Enums.StatutArticleTypes
    categorie: $Enums.CategorieArticleTypes
    imageId?: number | null
  }

  export type MembreActiviteUpdateWithoutMembreInput = {
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    activite?: ActiviteUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type MembreActiviteUncheckedUpdateWithoutMembreInput = {
    id?: IntFieldUpdateOperationsInput | number
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    activiteId?: IntFieldUpdateOperationsInput | number
  }

  export type MembreActiviteUncheckedUpdateManyWithoutMembreInput = {
    id?: IntFieldUpdateOperationsInput | number
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    activiteId?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleUpdateWithoutRedacteurInput = {
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutArticleTypesFieldUpdateOperationsInput | $Enums.StatutArticleTypes
    categorie?: EnumCategorieArticleTypesFieldUpdateOperationsInput | $Enums.CategorieArticleTypes
    image?: FichierUpdateOneWithoutArticlesNestedInput
  }

  export type ArticleUncheckedUpdateWithoutRedacteurInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutArticleTypesFieldUpdateOperationsInput | $Enums.StatutArticleTypes
    categorie?: EnumCategorieArticleTypesFieldUpdateOperationsInput | $Enums.CategorieArticleTypes
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArticleUncheckedUpdateManyWithoutRedacteurInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutArticleTypesFieldUpdateOperationsInput | $Enums.StatutArticleTypes
    categorie?: EnumCategorieArticleTypesFieldUpdateOperationsInput | $Enums.CategorieArticleTypes
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ActiviteCreateManyCategorieInput = {
    id?: number
    titre: string
    contenu: string
    date_heure_debut: Date | string
    date_heure_fin: Date | string
  }

  export type ActiviteUpdateWithoutCategorieInput = {
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    date_heure_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_heure_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: MembreActiviteUpdateManyWithoutActiviteNestedInput
  }

  export type ActiviteUncheckedUpdateWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    date_heure_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_heure_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: MembreActiviteUncheckedUpdateManyWithoutActiviteNestedInput
  }

  export type ActiviteUncheckedUpdateManyWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    date_heure_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_heure_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembreActiviteCreateManyActiviteInput = {
    id?: number
    observations?: string | null
    dateInscription?: Date | string
    membreId: number
  }

  export type MembreActiviteUpdateWithoutActiviteInput = {
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    membre?: MembreUpdateOneRequiredWithoutInscriptionsNestedInput
  }

  export type MembreActiviteUncheckedUpdateWithoutActiviteInput = {
    id?: IntFieldUpdateOperationsInput | number
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    membreId?: IntFieldUpdateOperationsInput | number
  }

  export type MembreActiviteUncheckedUpdateManyWithoutActiviteInput = {
    id?: IntFieldUpdateOperationsInput | number
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    membreId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}