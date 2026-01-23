import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'
import { buildConfig } from 'payload'

// Globals
import { Footer } from './app/globals/Footer'
import { Nav } from './app/globals/Nav'
import { Logo } from './app/globals/Logo'

// Colletions

//--General
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { News } from './collections/News'
import { Teams } from './collections/Teams'

//--Persons
import { Users } from './collections/Users'
import { Players } from './collections/Players'
import { Coaches } from './collections/Coaches'
import { People } from './collections/People'

//--Other
import { Sponsors } from './collections/Sponsors'
import { Opponents } from './collections/Opponents'
import { Matches } from './collections/Matches'
import { ClubArenas } from './app/globals/ClubArenas'
import { TeamLineups } from './collections/TeamLineUps'
import { InfoArticles } from './collections/Info-articles'

if (!process.env.DATABASE_URI) {
  throw new Error('DATABASE_URI is missing')
}

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [Nav, Footer, Logo, ClubArenas],
  collections: [
    Users,
    Media,
    Pages,
    News,
    Teams,
    Players,
    Coaches,
    Sponsors,
    Opponents,
    Matches,
    People,
    TeamLineups,
    InfoArticles,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'your-secret-fallback',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  sharp,
  plugins: [],
})
