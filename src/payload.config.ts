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

console.log('DB:', process.env.DATABASE_URL)

export default buildConfig({
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
  ],
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
