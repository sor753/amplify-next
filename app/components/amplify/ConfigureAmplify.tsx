/**
 * Next.jsアプリケーションでAWS AmplifyをSSR（サーバーサイドレンダリング）対応で設定するためのコンポーネントです。
 *
 * このコンポーネントは、生成されたJSONファイルからAmplifyの設定をインポートし、
 * `Amplify.configure()`を使って適用します。これにより、認証やAPIアクセスなどのAmplify機能が有効になります。
 * 設定時に`{ ssr: true }`を指定することで、Next.jsのSSRに対応します。
 *
 * @remarks
 * このコンポーネントはクライアントサイドでのみレンダリングされ、UIは一切表示しません（`null`を返します）。
 *
 * @see
 * - [Stack Overflow: AWS Amplify authentication issue: Auth userPool not configured in a Next.js project](https://stackoverflow.com/questions/77667962/aws-amplify-authentication-issue-auth-userpool-not-configured-in-a-next-js-pr)
 *
 * @example
 * ```tsx
 * // Next.jsアプリのルート（例: _app.tsxやlayout）でこのコンポーネントを配置してください
 * import ConfigureAmplifyClientSide from './components/amplify/ConfigureAmplify';
 *
 * export default function App({ Component, pageProps }) {
 *   return (
 *     <>
 *       <ConfigureAmplifyClientSide />
 *       <Component {...pageProps} />
 *     </>
 *   );
 * }
 * ```
 */
import { Amplify } from 'aws-amplify';
import outputs from '../../../amplify_outputs.json';

Amplify.configure(outputs, { ssr: true });

export default function ConfigureAmplifyClientSide() {
  return null;
}
