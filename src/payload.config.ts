import { config as dotenvConfig } from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Ladda .env filen
dotenvConfig({ path: path.resolve(dirname, '.env') })

// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'
import { buildConfig } from 'payload'

// Colletions
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { Pages } from './collections/Pages'
import { Guides } from './collections/Guides'

// Globals
import { Footer } from './app/globals/Footer'
import { Nav } from './app/globals/Nav'
import { Logo } from './app/globals/Logo'
import { Comments } from './collections/Comments'
import { Employees } from './collections/Employees'

console.log('DB:', process.env.DATABASE_URL)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [Nav, Footer, Logo],
  collections: [Users, Media, Posts, Pages, Guides, Comments, Employees],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'your-secret-fallback',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  plugins: [],
})
