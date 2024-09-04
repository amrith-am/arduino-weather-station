import React from 'react'
import { useTranslation } from 'next-i18next'
import { useTheme } from 'next-themes'

import styles from './styles.module.sass'

import { API } from '@/api'
import { formatDate, minutesAgo, timeAgo } from '@/tools/helpers'
import useClientOnly from '@/tools/hooks/useClientOnly'
import Icon from '@/ui/icon'
import Spinner from '@/ui/spinner'
import ThemeSwitcher from '@/ui/theme-switcher'

interface HeaderProps {
    fullSize?: boolean
    onMenuClick?: () => void
}

const OFFLINE_TIME = 30

const AppBar: React.FC<HeaderProps> = ({ onMenuClick }) => {
    const isClient = useClientOnly()
    const { theme, setTheme } = useTheme()
    const { t } = useTranslation()
    const { data: current, isLoading } = API.useGetCurrentQuery(undefined, { pollingInterval: 60 * 1000 })

    return (
        <header className={styles.appBar}>
            <div className={styles.wrapper}>
                <div className={styles.aside}>
                    <button
                        className={styles.hamburgerButton}
                        onClick={onMenuClick}
                        aria-label={'Toggle Sidebar'}
                    >
                        <Icon name={'Menu'} />
                    </button>

                    {!isLoading && (
                        <div className={minutesAgo(current?.date) <= OFFLINE_TIME ? styles.online : styles.offline} />
                    )}

                    {isLoading ? (
                        <div className={styles.loading}>
                            <Spinner /> {t('please-wait-loading')}
                        </div>
                    ) : (
                        <div>
                            <div>{formatDate(current?.date)}</div>
                            <div className={styles.timeAgo}>{timeAgo(current?.date)}</div>
                        </div>
                    )}
                </div>

                {isClient && (
                    <ThemeSwitcher
                        theme={theme}
                        onChangeTheme={setTheme}
                    />
                )}
            </div>
        </header>
    )
}

export default AppBar
