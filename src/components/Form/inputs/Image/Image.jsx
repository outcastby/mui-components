import React, { useRef } from 'react'
import FormHelperText from '@material-ui/core/FormHelperText'
import styles from './Image.module.scss'
import CloseIcon from '@material-ui/icons/CloseOutlined'

const BASE_HEIGHT = 200
export default function Image({
  field: { name, size, forbidDeletion },
  value,
  onChange,
  helpText,
  error,
  classes = {},
}) {
  const ref = useRef(null)
  const [imgWidth, imgHeight] = size.split('x').map((e) => parseInt(e))

  const handleClick = () => {
    ref.current.value = ''
    onChange({ target: { name, files: [null] } })
  }

  return (
    <div className={styles.container}>
      <input hidden={!!value} name={name} onChange={onChange} ref={ref} type="file" />
      {error && <FormHelperText className={classes.labelRootError}>{helpText}</FormHelperText>}
      {value && (
        <div className={styles.imageContainer}>
          {!forbidDeletion && (
            <div className={styles.deleteIcon} onClick={handleClick}>
              <CloseIcon />
            </div>
          )}
          <div onClick={() => ref.current.click()}>
            {value instanceof File ? (
              <div style={{ height: `${BASE_HEIGHT}px`, width: `${Math.round((200 * imgWidth) / imgHeight)}px` }}>
                <img alt={name} className={styles.imagePreview} height="200" src={URL.createObjectURL(value)} />
              </div>
            ) : (
              <div>
                <img alt={name} height={BASE_HEIGHT} src={value} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
