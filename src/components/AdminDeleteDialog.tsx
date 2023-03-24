import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import * as React from 'react'
import { Product } from '../../data'

interface Props {
  open: boolean
  handleClose: () => void
  handleDelete: (product: Product) => void
  dataProduct: Product
}

export default function AdminDeleteDialog(props: Props) {
  const { open, handleClose, handleDelete, dataProduct } = props

  const handleConfirmDelete = () => {
    handleDelete(dataProduct)
    handleClose()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{'Delete Product'}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Are you sure you want to delete this product?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleConfirmDelete} autoFocus data-cy='confirm-delete-button'>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}
