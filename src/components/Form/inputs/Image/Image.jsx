import React, { useRef } from 'react'
import FormHelperText from '@material-ui/core/FormHelperText'
import styles from './Image.module.scss'
import CloseIcon from '@material-ui/icons/CloseOutlined'

const BASE_HEIGHT = 200
export default function Image ({ field: { name, size, forbidDeletion }, value, onChange, errors, classes = {} }) {
  const ref = useRef(null)

  const getImageStyles = () => {
    if (!size) return {}

    const [imgWidth, imgHeight] = size.split('x').map((e) => parseInt(e))

    return { height: `${BASE_HEIGHT}px`, width: `${Math.round((200 * imgWidth) / imgHeight)}px` }
  }

  const handleDelete = () => {
    ref.current.value = ''
    onChange({ target: { name, files: [null] } })
  }

  return (
    <div className={styles.container}>
      <input hidden={!!value} name={name} onChange={onChange} ref={ref} type="file" />
      {errors && <FormHelperText className={classes.labelRootError}>{errors[0]}</FormHelperText>}
      {value && (
        <div className={styles.imageContainer}>
          {!forbidDeletion && (
            <div className={styles.deleteIcon} onClick={handleDelete}>
              <CloseIcon />
            </div>
          )}
          <div onClick={() => ref.current.click()}>
            {value instanceof File ? (
              <div style={getImageStyles()}>
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
