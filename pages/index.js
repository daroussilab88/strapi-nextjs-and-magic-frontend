import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { fromImageToUrl, API_URL } from '../utils/urls'
import { twoDecimals } from '../utils/format'

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Create ecommerce app with Strapi and NextJs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {products.map(product => (
        <div key={product.name} className={styles.product}>
          <Link href={`/products/${product.slug}`}>
            <a>
            <div className={styles.product__row}>
              <div className={styles.product__colImg}>
                <img src={fromImageToUrl(product.image)} />
              </div>
              <div className={styles.product__col}>
                {product.name} ${twoDecimals(product.price)}
              </div>
            </div>
            </a>
          </Link>
        </div>
      ))}

    </div>
  )
}

export async function getStaticProps() {
  //Fetch the products
  const product_res = await fetch(`${API_URL}/products/`)
  const products = await product_res.json()

  //Return the products as props
  return {
    props: {
      products
    }
  }
}
